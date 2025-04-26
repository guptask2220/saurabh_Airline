const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const Flight = require('../models/Flight');
const Aircraft = require('../models/Aircraft');
const User = require('../models/User');

// @route    GET api/flights
// @desc     Get all flights
// @access   Private/Admin/Crew
router.get('/', protect, authorize('admin', 'crew'), async (req, res) => {
    try {
        const flights = await Flight.find()
            .populate('aircraft', 'name type registrationNumber capacity')
            .populate('crewMembers', 'name email role')
            .populate('createdBy', 'name email');
        res.json(flights);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/flights/available
// @desc     Get available flights for clients
// @access   Private
router.get('/available', protect, async (req, res) => {
    try {
        const currentDate = new Date();
        const flights = await Flight.find({ 
            departureTime: { $gte: currentDate },
            status: 'scheduled',
            availableSeats: { $gt: 0 }
        })
        .populate('aircraft', 'name type capacity')
        .select('-crewMembers -createdBy -createdAt');
        
        res.json(flights);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/flights
// @desc     Add new flight
// @access   Private/Admin
router.post(
    '/',
    [
        protect,
        authorize('admin'),
        [
            check('flightNumber', 'Flight number is required').not().isEmpty(),
            check('departure', 'Departure is required').not().isEmpty(),
            check('destination', 'Destination is required').not().isEmpty(),
            check('departureTime', 'Departure time is required').not().isEmpty(),
            check('arrivalTime', 'Arrival time is required').not().isEmpty(),
            check('aircraft', 'Aircraft is required').not().isEmpty(),
            check('price', 'Price is required').isNumeric(),
            check('availableSeats', 'Available seats is required').isNumeric()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            flightNumber,
            departure,
            destination,
            departureTime,
            arrivalTime,
            aircraft,
            crewMembers,
            price,
            availableSeats
        } = req.body;

        try {
            // Check if aircraft exists
            const aircraftExists = await Aircraft.findById(aircraft);
            if (!aircraftExists) {
                return res.status(400).json({ msg: 'Aircraft not found' });
            }

            // Check if crew members exist and are crew role
            if (crewMembers && crewMembers.length > 0) {
                const crew = await User.find({ 
                    _id: { $in: crewMembers },
                    role: 'crew'
                });
                
                if (crew.length !== crewMembers.length) {
                    return res.status(400).json({ msg: 'One or more crew members not found or not valid crew' });
                }
            }

            const newFlight = new Flight({
                flightNumber,
                departure,
                destination,
                departureTime,
                arrivalTime,
                aircraft,
                crewMembers,
                price,
                availableSeats,
                createdBy: req.user.id
            });

            const flight = await newFlight.save();
            res.json(flight);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    PUT api/flights/:id
// @desc     Update flight
// @access   Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    const {
        flightNumber,
        departure,
        destination,
        departureTime,
        arrivalTime,
        aircraft,
        crewMembers,
        status,
        price,
        availableSeats
    } = req.body;

    try {
        let flight = await Flight.findById(req.params.id);

        if (!flight) {
            return res.status(404).json({ msg: 'Flight not found' });
        }

        // Check if aircraft exists
        if (aircraft) {
            const aircraftExists = await Aircraft.findById(aircraft);
            if (!aircraftExists) {
                return res.status(400).json({ msg: 'Aircraft not found' });
            }
            flight.aircraft = aircraft;
        }

        // Check if crew members exist and are crew role
        if (crewMembers && crewMembers.length > 0) {
            const crew = await User.find({ 
                _id: { $in: crewMembers },
                role: 'crew'
            });
            
            if (crew.length !== crewMembers.length) {
                return res.status(400).json({ msg: 'One or more crew members not found or not valid crew' });
            }
            flight.crewMembers = crewMembers;
        }

        if (flightNumber) flight.flightNumber = flightNumber;
        if (departure) flight.departure = departure;
        if (destination) flight.destination = destination;
        if (departureTime) flight.departureTime = departureTime;
        if (arrivalTime) flight.arrivalTime = arrivalTime;
        if (status) flight.status = status;
        if (price) flight.price = price;
        if (availableSeats) flight.availableSeats = availableSeats;

        await flight.save();
        res.json(flight);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/flights/:id
// @desc     Delete flight
// @access   Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        let flight = await Flight.findById(req.params.id);

        if (!flight) {
            return res.status(404).json({ msg: 'Flight not found' });
        }

        await Flight.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Flight removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;