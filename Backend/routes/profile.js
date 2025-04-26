const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { protect } = require('../middleware/auth');
const User = require('../models/User');

// @route    GET api/profile/me
// @desc     Get current user's profile
// @access   Private
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/profile
// @desc     Update current user's profile
// @access   Private
router.put(
    '/',
    [
        protect,
        [
            check('name', 'Name is required').not().isEmpty(),
            check('email', 'Please include a valid email').isEmail()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, address } = req.body;

        const profileFields = {};
        profileFields.name = name;
        profileFields.email = email;
        if (phone) profileFields.phone = phone;
        if (address) profileFields.address = address;

        try {
            let user = await User.findById(req.user.id);

            if (!user) {
                return res.status(404).json({ msg: 'User not found' });
            }

            // Check if email is already taken by another user
            if (email !== user.email) {
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ msg: 'Email already in use' });
                }
            }

            user = await User.findByIdAndUpdate(
                req.user.id,
                { $set: profileFields },
                { new: true }
            ).select('-password');

            res.json(user);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    PUT api/profile/password
// @desc     Update current user's password
// @access   Private
router.put(
    '/password',
    [
        protect,
        [
            check('currentPassword', 'Current password is required').exists(),
            check('newPassword', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { currentPassword, newPassword } = req.body;

        try {
            let user = await User.findById(req.user.id).select('+password');

            if (!user) {
                return res.status(404).json({ msg: 'User not found' });
            }

            // Check current password
            const isMatch = await user.matchPassword(currentPassword);

            if (!isMatch) {
                return res.status(400).json({ msg: 'Current password is incorrect' });
            }

            // Update password
            user.password = newPassword;
            await user.save();

            res.json({ msg: 'Password updated successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;