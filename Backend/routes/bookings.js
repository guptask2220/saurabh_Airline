const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const upload = require('../utils/fileUpload');
// @route    GET api/bookings
// @desc     Get all bookings (admin only)
// @access   Private/Admin
router.post(
    '/:id/upload',
    protect,
    authorize('admin'),
    upload.array('documents'),
    async (req, res) => {
        try {
            const booking = await Booking.findById(req.params.id);

            if (!booking) {
                return res.status(404).json({ msg: 'Booking not found' });
            }

            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ msg: 'Please upload at least one document' });
            }

            const documents = req.files.map(file => ({
                url: file.location,
                name: file.originalname
            }));

            booking.documents = documents;
            await booking.save();

            res.json(booking);
        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Booking not found' });
            }
            res.status(500).send('Server Error');
        }
    }
);



router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('flight', 'flightNumber departure destination departureTime arrivalTime price')
            .populate('user', 'name email phone')
            .sort({ createdAt: -1 });
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/bookings/my
// @desc     Get current user's bookings
// @access   Private
router.get('/my', protect, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .populate('flight', 'flightNumber departure destination departureTime arrivalTime price')
            .sort({ createdAt: -1 });
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/bookings/:id
// @desc     Get booking by ID
// @access   Private
router.get('/:id', protect, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate('flight', 'flightNumber departure destination departureTime arrivalTime price')
            .populate('user', 'name email phone');

        if (!booking) {
            return res.status(404).json({ msg: 'Booking not found' });
        }

        // Make sure user is booking owner or admin
        if (booking.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        res.json(booking);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Booking not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route    POST api/bookings
// @desc     Create a booking
// @access   Private
router.post(
    '/',
    [
        protect,
        [
            check('flight', 'Flight is required').not().isEmpty(),
            check('seats', 'Number of seats is required').isInt({ min: 1 })
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { flight, seats, agreement } = req.body;

        try {
            // Get flight
            const flightDoc = await Flight.findById(flight);

            if (!flightDoc) {
                return res.status(404).json({ msg: 'Flight not found' });
            }

            // Check available seats
            if (flightDoc.availableSeats < seats) {
                return res.status(400).json({ msg: 'Not enough available seats' });
            }

            // Calculate total price
            const totalPrice = flightDoc.price * seats;

            // Create booking
            const newBooking = new Booking({
                flight,
                user: req.user.id,
                seats,
                totalPrice,
                agreement
            });

            // Update flight available seats
            flightDoc.availableSeats -= seats;
            await flightDoc.save();

            const booking = await newBooking.save();

            // Create transaction record
            const newTransaction = new Transaction({
                booking: booking._id,
                amount: totalPrice,
                currency: 'USD', // You can make this dynamic
                paymentMethod: 'credit_card', // You can make this dynamic
                status: 'pending',
                user: req.user.id
            });

            await newTransaction.save();

            // Populate flight and user in response
            const populatedBooking = await Booking.findById(booking._id)
                .populate('flight', 'flightNumber departure destination departureTime arrivalTime price')
                .populate('user', 'name email phone');

            res.json(populatedBooking);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    PUT api/bookings/:id/cancel
// @desc     Cancel a booking
// @access   Private
router.put('/:id/cancel', protect, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ msg: 'Booking not found' });
        }

        // Make sure user is booking owner or admin
        if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // Check if booking is already cancelled
        if (booking.status === 'cancelled') {
            return res.status(400).json({ msg: 'Booking is already cancelled' });
        }

        // Get flight to update available seats
        const flight = await Flight.findById(booking.flight);

        // Update flight available seats
        flight.availableSeats += booking.seats;
        await flight.save();

        // Update booking status
        booking.status = 'cancelled';
        booking.paymentStatus = 'refunded';
        await booking.save();

        // Update transaction status
        await Transaction.findOneAndUpdate(
            { booking: booking._id },
            { $set: { status: 'refunded' } },
            { new: true }
        );

        res.json(booking);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Booking not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/bookings/:id/upload-docs
// @desc     Upload documents for booking
// @access   Private/Admin
router.put('/:id/upload-docs', protect, authorize('admin'), async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ msg: 'Booking not found' });
        }

        const { documents } = req.body;

        if (!documents || !Array.isArray(documents) || documents.length === 0) {
            return res.status(400).json({ msg: 'Documents are required' });
        }

        booking.documents = documents;
        await booking.save();

        res.json(booking);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Booking not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;