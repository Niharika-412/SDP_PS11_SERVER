const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // User model to interact with MongoDB

const router = express.Router();

// Sign Up Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password before saving to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();  // Save the user to the database
    res.status(201).json({ message: 'User created successfully' });  // Respond back with success
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Sign In Route (User Login)
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare the provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: 'Sign-in successful', token });
});

module.exports = router;
