const express = require("express");
const router = express.Router();
const assignment = require("../models/Assignment");
const user = require("../models/users");

router.get("/",(req, res)=>{
  res.render("teacher.ejs")
  console.log("teacher page rendered")
});

// add assignment to database
router.post("/add_question", async (req, res) => {
  const new_assignment = new assignment({
    year: req.body.year,
    AssignmentQuestions: req.body.AssignmentQuestions,
  });
  try {
    const NewAssignment = await new_assignment.save();
    res.redirect("/teacher");
    console.log(
      "new question is : \n -----------------------------  \n ",
      NewAssignment
    );
  } catch (err) {
    console.log(err);
    res.redirect("/teacher");
  }
});

// add user to database
router.post("/add_user", async (req, res) => {
  const new_user = new user({
    year: req.body.year,
    usertype:req.body.usertype,
    username: req.body.username,
    password: req.body.password
  });
  try {
    const NewUser = await new_user.save();
    res.redirect("/teacher");
    console.log(
      "new user is : \n -----------------------------  \n ",
      NewUser
    );
  } catch (err) {
    console.log(err);
    res.redirect("/teacher");
  }
});

module.exports = router;
