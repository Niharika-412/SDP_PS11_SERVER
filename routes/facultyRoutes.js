const express = require('express');
const router = express.Router();

// Sample data for faculty (you can replace this with actual database logic)
const facultyData = [
  { id: 1, name: 'Dr. Praveen', department: 'Computer Science', courses: ['Data Structures', 'Algorithms'] },
  { id: 2, name: 'Dr. Kiran', department: 'Mathematics', courses: ['Calculus', 'Statistics'] },
  { id: 3, name: 'Dr. Radhika Sharma', department: 'Physics', courses: ['Quantum Mechanics', 'Electromagnetism'] },
  { id: 4, name: 'Dr. Vikram Singh', department: 'Chemistry', courses: ['Organic Chemistry', 'Inorganic Chemistry'] },
];

// Faculty route - GET /api/faculty
router.get('/', (req, res) => {
  res.json(facultyData);  // Return the sample faculty data
});

module.exports = router;
