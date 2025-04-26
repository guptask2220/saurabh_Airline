const mongoose = require('mongoose');

const BankAccountSchema = new mongoose.Schema({
    accountName: {
        type: String,
        required: [true, 'Please add account name']
    },
    accountNumber: {
        type: String,
        required: [true, 'Please add account number']
    },
    bankName: {
        type: String,
        required: [true, 'Please add bank name']
    },
    branch: {
        type: String,
        required: [true, 'Please add branch']
    },
    swiftCode: {
        type: String
    },
    iban: {
        type: String
    },
    currency: {
        type: String,
        required: [true, 'Please add currency']
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
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

module.exports = mongoose.model('BankAccount', BankAccountSchema);