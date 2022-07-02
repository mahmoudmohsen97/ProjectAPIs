const express = require("express");
const router = express.Router();
const assignment = require("../models/Assignment");
const user = require("../models/users");

router.get("/",(req, res)=>{
  res.render("teacher.ejs")
  console.log("/teacher page rendered")
});

router.get("/addassignment",(req, res)=>{
  res.render("TeacherDasboard/AddAssignment.ejs")
  console.log("teacher/AddAssignment page rendered")
});

router.get("/adduser",(req, res)=>{
  res.render("TeacherDasboard/AddUser.ejs")
  console.log("teacher/AddUser page rendered")
});

// add assignment to database
router.post("/addassignment", async (req, res) => {
  const new_assignment = new assignment({
    year: req.body.year,
    AssignmentQuestions: req.body.AssignmentQuestions,
  });
  try {
    const NewAssignment = await new_assignment.save();
    res.redirect("/addassignment");
    console.log(
      "new assignment is : \n -----------------------------  \n ",
      NewAssignment
    );
  } catch (err) {
    console.log(err);
    res.redirect("/addassignment");
  }
});

// add user to database
router.post("/adduser", async (req, res) => {
  const new_user = new user({
    year:req.body.year,
    usertype:req.body.usertype,
    username:req.body.username,
    password:req.body.password
  });
  try {
    const NewUser = await new_user.save();
    res.redirect("/adduser");
    console.log(
      "new user is : \n -----------------------------  \n ",
      NewUser
    );
  } catch (err) {
    console.log(err);
    res.redirect("/adduser");
  }
});

module.exports = router;
