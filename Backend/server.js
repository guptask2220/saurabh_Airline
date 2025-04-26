process.removeAllListeners('warning'); // Suppresses all Node.js warnings
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { check, validationResult } = require('express-validator');
const auth = require('./routes/auth');
const trip = require('./routes/tripRoutes')
const users = require('./routes/users');
const profile = require('./routes/profile');
const aircrafts = require('./routes/aircrafts');
const flights = require('./routes/flights');
const bookings = require('./routes/bookings');
const bankAccounts = require('./routes/bankAccounts');
const transactions = require('./routes/transactions');

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
  
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

const { dbConnect } = require("./config/db");
dbConnect();

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/aircrafts', aircrafts);
app.use('/api/flights', flights);
app.use('/api/bookings', bookings);
app.use('/api/bank-accounts', bankAccounts);
app.use('/api/transactions', transactions);
app.use('/api/trip', trip);




// Database connection
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));


// Test route
app.get('/', (req, res) => {
    res.send('Flight Management System ');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));