const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    flight: {
        type: mongoose.Schema.ObjectId,
        ref: 'Flight',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    seats: {
        type: Number,
        required: [true, 'Please add number of seats']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Please add total price']
    },
    status: {
        type: String,
        enum: ['confirmed', 'cancelled', 'completed'],
        default: 'confirmed'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'refunded'],
        default: 'pending'
    },
    agreement: {
        type: String
    },
    documents: [{
        url: String,
        name: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', BookingSchema);