const mongoose = require('mongoose');

// Define schema for user data
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },  // Email of the user (unique)
  password: { type: String, required: true },             // Hashed password
});

const User = mongoose.model('User', UserSchema); // Create model from the schema

module.exports = User;
