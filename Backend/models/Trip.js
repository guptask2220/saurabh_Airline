const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripName: { type: String, required: true },
  client: { type: String, required: true },
  approveExpenses: { type: Boolean, default: false },
  fees: { type: Number },
  percentage: { type: Number },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  destinationFrom: { type: String },
  destinationTo: { type: String },
  aircraftType: { type: String },
  aircraftRegistration: { type: String },
  hotelType: { type: String },
  travelClass: { type: String },
  crewMembers: [
    {
      name: String,
      role: String,
      clientDailyRate: Number,
      clientPerDiems: Number,
      crewDailyRate: Number,
      crewPerDiems: Number,
      vat: Number
    }
  ],
  expenses: [
    {
      title: String,
      merchant: String,
      date: Date,
      amount: Number,
      status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
    }
  ],
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  {
    timestamps: true
  }
});

module.exports = mongoose.model('Trip', tripSchema);