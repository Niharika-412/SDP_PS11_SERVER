const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: String }, // Example: "3 months"
    instructor: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
