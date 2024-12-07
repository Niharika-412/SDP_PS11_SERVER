const express = require('express');
const { getStudents, addStudent } = require('../Controllers/studentController');
const router = express.Router();

router.route('/').get(getStudents).post(addStudent);

module.exports = router;
