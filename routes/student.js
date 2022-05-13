const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");


router.get("/SendQuestionToStudent", async (req, res) => {
  try {
    const questionhead = await Assignment.find({},{AssignmentQuestions:1})
      res.send(questionhead)
      
  } catch (e){
    console.log(e.message);
  }
});
module.exports = router;
