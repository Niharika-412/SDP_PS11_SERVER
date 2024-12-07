const Student = require('../models/student');

const getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
};

const addStudent = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
};

module.exports = { getStudents, addStudent };
