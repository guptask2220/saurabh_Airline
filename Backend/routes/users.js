const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const User = require('../models/User');

// @route    GET api/users
// @desc     Get all users
// @access   Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/users/crew
// @desc     Get all crew members
// @access   Private/Admin
router.get('/crew', protect, authorize('admin'), async (req, res) => {
    try {
        const crew = await User.find({ role: 'crew' }).select('-password');
        res.json(crew);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/users/:id
// @desc     Get user by ID
// @access   Private/Admin
router.get('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/users/:id
// @desc     Update user
// @access   Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    const { name, email, role, phone, address } = req.body;

    const userFields = {};
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (role) userFields.role = role;
    if (phone) userFields.phone = phone;
    if (address) userFields.address = address;

    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: userFields },
            { new: true }
        ).select('-password');

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/users/:id
// @desc     Delete user
// @access   Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        await User.findByIdAndRemove(req.params.id);

        res.json({ msg: 'User removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;