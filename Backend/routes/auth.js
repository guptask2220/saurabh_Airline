const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    check('role', 'Invalid role').isIn(['admin', 'crew', 'client']),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array().map(err => err.msg) 
      });
    }

    const { name, email, password, role, phone } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
        .status(400)
        .json({ success: false, message: "User already exist" });
      }

      user = new User({ name, email, password, role, phone });
      await user.save();

      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({ 
            success: true, 
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ 
        success: false, 
        errors: ['Server error'] 
      });
    }
  }
);


router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        // console.log("login body :"+req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        console.log("email:" + email)

        try {
            // let user = await User.findOne({ email });
            let user = await User.findOne({ email }).select('+password');
            console.log("user:" + user)

            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const isMatch =  await bcrypt.compare(password, user.password);
            console.log("isMatch:" + isMatch)

            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const payload = {
                user: {
                    id: user.id,
                    role: user.role
                }
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '5 days' },
                (err, token) => {
                    if (err) throw err;
                    res.json({ 
                        token,
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            role: user.role
                        }
                    });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;