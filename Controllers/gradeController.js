// server/Controllers/gradesController.js

// Sample function to get grades by studentId
const getGrades = (req, res) => {
    const studentId = req.params.studentId;
  
    // Sample grades data
    const gradesData = {
      "123": { Math: 85, Science: 90, English: 78, History: 88, Geography: 92 },
      "124": { Math: 75, Science: 80, English: 85, History: 70, Geography: 80 },
      "125": { Math: 95, Science: 92, English: 90, History: 94, Geography: 89 },
      "318":{AOOP:90,daa:95,aiml:98,dbms:99},
    };
  
    const grades = gradesData[studentId];
  
    if (grades) {
      res.json(grades);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  };
  
  module.exports = { getGrades };
  