const mongoose = require('mongoose');

const AircraftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add aircraft name']
    },
    type: {
        type: String,
        required: [true, 'Please add aircraft type']
    },
    registrationNumber: {
        type: String,
        required: [true, 'Please add registration number'],
        unique: true
    },
    capacity: {
        type: Number,
        required: [true, 'Please add passenger capacity']
    },
    status: {
        type: String,
        enum: ['active', 'maintenance', 'inactive'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Aircraft', AircraftSchema);