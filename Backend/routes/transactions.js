const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const Transaction = require('../models/Transaction');
const Booking = require('../models/Booking');
const BankAccount = require('../models/BankAccount');

// @route    GET api/transactions
// @desc     Get all transactions
// @access   Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .populate('booking', 'flight user seats totalPrice')
            .populate('user', 'name email')
            .populate('bankAccount', 'accountName accountNumber bankName')
            .sort({ createdAt: -1 });
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/transactions/my
// @desc     Get current user's transactions
// @access   Private
router.get('/my', protect, async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id })
            .populate('booking', 'flight user seats totalPrice')
            .populate('bankAccount', 'accountName accountNumber bankName')
            .sort({ createdAt: -1 });
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/transactions/:id/complete
// @desc     Complete a transaction
// @access   Private/Admin
router.put(
    '/:id/complete',
    [
        protect,
        authorize('admin'),
        [
            check('bankAccount', 'Bank account is required').not().isEmpty(),
            check('transactionId', 'Transaction ID is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { bankAccount, transactionId } = req.body;

        try {
            // Check if bank account exists
            const bankAccountExists = await BankAccount.findById(bankAccount);
            if (!bankAccountExists) {
                return res.status(400).json({ msg: 'Bank account not found' });
            }

            let transaction = await Transaction.findById(req.params.id);

            if (!transaction) {
                return res.status(404).json({ msg: 'Transaction not found' });
            }

            // Check if transaction is already completed
            if (transaction.status === 'completed') {
                return res.status(400).json({ msg: 'Transaction is already completed' });
            }

            // Update transaction
            transaction.bankAccount = bankAccount;
            transaction.transactionId = transactionId;
            transaction.status = 'completed';
            
            await transaction.save();

            // Update booking payment status if transaction is for a booking
            if (transaction.booking) {
                await Booking.findByIdAndUpdate(
                    transaction.booking,
                    { $set: { paymentStatus: 'paid' } },
                    { new: true }
                );
            }

            res.json(transaction);
        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Transaction not found' });
            }
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;

