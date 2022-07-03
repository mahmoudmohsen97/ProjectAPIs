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

module.exports = router;
