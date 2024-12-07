// index.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize MongoDB connection
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(bodyParser.json());  // Parse incoming JSON requests

// Routes
app.use('/api/auth', require('./routes/auth'));  // Auth routes mapped here
app.use('/api/students', require('./routes/studentRoutes'));  // Other routes
app.use('/api/grades', require('./routes/gradeRoutes'));  // Grades routes
app.use('/api/faculty', require('./routes/facultyRoutes'));  // Faculty routes
app.use('/api/auth', require('./routes/auth'));

 // Faculty routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
