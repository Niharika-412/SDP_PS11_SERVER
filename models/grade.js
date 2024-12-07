const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    grade: { type: Number, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Grade', gradeSchema);
