const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  res.send(username + password);
});
module.exports = router;
