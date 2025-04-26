const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const Aircraft = require('../models/Aircraft');

// @route    GET api/aircrafts
// @desc     Get all aircrafts
// @access   Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        const aircrafts = await Aircraft.find();
        res.json(aircrafts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/aircrafts
// @desc     Add new aircraft
// @access   Private/Admin
router.post(
    '/',
    [
        protect,
        authorize('admin'),
        [
            check('name', 'Name is required').not().isEmpty(),
            check('type', 'Type is required').not().isEmpty(),
            check('registrationNumber', 'Registration number is required').not().isEmpty(),
            check('capacity', 'Capacity is required').isNumeric()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, type, registrationNumber, capacity } = req.body;

        try {
            const newAircraft = new Aircraft({
                name,
                type,
                registrationNumber,
                capacity
            });

            const aircraft = await newAircraft.save();
            res.json(aircraft);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    PUT api/aircrafts/:id
// @desc     Update aircraft
// @access   Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    const { name, type, registrationNumber, capacity, status } = req.body;

    const aircraftFields = {};
    if (name) aircraftFields.name = name;
    if (type) aircraftFields.type = type;
    if (registrationNumber) aircraftFields.registrationNumber = registrationNumber;
    if (capacity) aircraftFields.capacity = capacity;
    if (status) aircraftFields.status = status;

    try {
        let aircraft = await Aircraft.findById(req.params.id);

        if (!aircraft) {
            return res.status(404).json({ msg: 'Aircraft not found' });
        }

        aircraft = await Aircraft.findByIdAndUpdate(
            req.params.id,
            { $set: aircraftFields },
            { new: true }
        );

        res.json(aircraft);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/aircrafts/:id
// @desc     Delete aircraft
// @access   Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        let aircraft = await Aircraft.findById(req.params.id);

        if (!aircraft) {
            return res.status(404).json({ msg: 'Aircraft not found' });
        }

        await Aircraft.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Aircraft removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;