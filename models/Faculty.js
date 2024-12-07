// models/Faculty.js
const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    department: { type: String, required: true },
    courses: [{ type: String }],
    profilePic: { type: String, default: '' },
    students: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Faculty', FacultySchema);
