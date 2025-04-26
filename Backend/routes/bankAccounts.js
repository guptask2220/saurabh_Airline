const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const BankAccount = require('../models/BankAccount');

// @route    GET api/bank-accounts
// @desc     Get all bank accounts
// @access   Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        const bankAccounts = await BankAccount.find().sort({ createdAt: -1 });
        res.json(bankAccounts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/bank-accounts
// @desc     Add new bank account
// @access   Private/Admin
router.post(
    '/',
    [
        protect,
        authorize('admin'),
        [
            check('accountName', 'Account name is required').not().isEmpty(),
            check('accountNumber', 'Account number is required').not().isEmpty(),
            check('bankName', 'Bank name is required').not().isEmpty(),
            check('branch', 'Branch is required').not().isEmpty(),
            check('currency', 'Currency is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            accountName,
            accountNumber,
            bankName,
            branch,
            swiftCode,
            iban,
            currency
        } = req.body;

        try {
            const newBankAccount = new BankAccount({
                accountName,
                accountNumber,
                bankName,
                branch,
                swiftCode,
                iban,
                currency,
                createdBy: req.user.id
            });

            const bankAccount = await newBankAccount.save();
            res.json(bankAccount);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    PUT api/bank-accounts/:id
// @desc     Update bank account
// @access   Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    const {
        accountName,
        accountNumber,
        bankName,
        branch,
        swiftCode,
        iban,
        currency,
        status
    } = req.body;

    const bankAccountFields = {};
    if (accountName) bankAccountFields.accountName = accountName;
    if (accountNumber) bankAccountFields.accountNumber = accountNumber;
    if (bankName) bankAccountFields.bankName = bankName;
    if (branch) bankAccountFields.branch = branch;
    if (swiftCode) bankAccountFields.swiftCode = swiftCode;
    if (iban) bankAccountFields.iban = iban;
    if (currency) bankAccountFields.currency = currency;
    if (status) bankAccountFields.status = status;

    try {
        let bankAccount = await BankAccount.findById(req.params.id);

        if (!bankAccount) {
            return res.status(404).json({ msg: 'Bank account not found' });
        }

        bankAccount = await BankAccount.findByIdAndUpdate(
            req.params.id,
            { $set: bankAccountFields },
            { new: true }
        );

        res.json(bankAccount);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/bank-accounts/:id
// @desc     Delete bank account
// @access   Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        let bankAccount = await BankAccount.findById(req.params.id);

        if (!bankAccount) {
            return res.status(404).json({ msg: 'Bank account not found' });
        }

        await BankAccount.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Bank account removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;