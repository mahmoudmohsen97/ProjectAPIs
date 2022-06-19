const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");
const user = require("../models/users");


router.get("/", async (req, res)=>{
  const assignment = await  Assignment.find({year:4},{AssignmentQuestions:1 ,_id:0})
  console.log(assignment)
 res.render("student.ejs",{assignment})
 console.log("student page rendered")
});


module.exports = router;
