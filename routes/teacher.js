const express = require("express");
const router = express.Router();
const assignment = require("../models/Assignment");
const AssignmentQuestions = require("../models/Assignment");



// add question
router.post("/add_question", async (req, res) => {
  const q = new assignment({
      question: req.body.question,
      answer: req.body.answer,
  });
  try {
    const newquestion = await q.save();
    res.redirect('/teacher');
    console.log("new question is : \n -----------------------------  \n " , newquestion);
  } catch (err) {
    console.log(err)
    res.redirect('/teacher');
    }
});


module.exports = router;
