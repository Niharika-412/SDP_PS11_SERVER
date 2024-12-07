// server/routes/gradeRoutes.js

const express = require("express");
const router = express.Router();
const { getGrades } = require("../Controllers/gradeController"); // Correct path to gradesController

router.get("/:studentId", getGrades); // Use the controller function

module.exports = router;
