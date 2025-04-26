const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    flightNumber: {
        type: String,
        required: [true, 'Please add flight number'],
        unique: true
    },
    departure: {
        type: String,
        required: [true, 'Please add departure location']
    },
    destination: {
        type: String,
        required: [true, 'Please add destination']
    },
    departureTime: {
        type: Date,
        required: [true, 'Please add departure time']
    },
    arrivalTime: {
        type: Date,
        required: [true, 'Please add arrival time']
    },
    aircraft: {
        type: mongoose.Schema.ObjectId,
        ref: 'Aircraft',
        required: true
    },
    crewMembers: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['scheduled', 'departed', 'arrived', 'cancelled', 'delayed'],
        default: 'scheduled'
    },
    price: {
        type: Number,
        required: [true, 'Please add ticket price']
    },
    availableSeats: {
        type: Number,
        required: [true, 'Please add available seats']
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Flight', FlightSchema);