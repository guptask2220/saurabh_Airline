const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.ObjectId,
        ref: 'Booking'
    },
    amount: {
        type: Number,
        required: [true, 'Please add amount']
    },
    currency: {
        type: String,
        required: [true, 'Please add currency']
    },
    paymentMethod: {
        type: String,
        required: [true, 'Please add payment method']
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending'
    },
    transactionId: {
        type: String
    },
    bankAccount: {
        type: mongoose.Schema.ObjectId,
        ref: 'BankAccount'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);