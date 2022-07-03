const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");
const user = require("../models/users");
const { ObjectId } = require('mongodb');


router.get("/", async (req, res) => {
  const year = req.query.year
  const assignment = await Assignment.find({ year: year }, { AssignmentQuestions: 1, _id: 1 })
  console.log(assignment)
  res.render("student.ejs", { assignment })
  console.log("student page rendered")
});

router.post("/exam", async (req, res) => {
  const examId = ObjectId((req.body.id).trim());
  const examAnswers = req.body.answers;
  const assignment = await Assignment.findById({ _id: examId })
  console.log(assignment);
  examAnswers.forEach((studentAnswer,index) => {
    console.log(index);
    evaluateAnswer(studentAnswer,assignment.AssignmentQuestions[index].answer);
  });
  // return
});

module.exports = router;
