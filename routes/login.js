const express = require("express");
const router = express.Router();
const user = require("../models/users");

router.get("/",(req, res)=>{
  res.render("login.ejs")
  console.log("login page rendered")
});

router.post("/auth", async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  try {
    const userlogin = await user.find({
      username: username,
      password: password,
    });
    console.log(userlogin);
    if (userlogin[0].usertype === false) {
      res.redirect("/student")
    }
    if (userlogin[0].usertype === true) {
      res.redirect("/teacher");
    }
  } catch (error) {}
});
module.exports = router;
