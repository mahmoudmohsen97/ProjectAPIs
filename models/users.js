const mongoose = require("mongoose");

// defining assignment schema
const UsersSchema = mongoose.Schema({
  year:{
      type: Number,
      required: true,
  },
  usertype:{
    type:Boolean, //true for teacher and false for student
    required: true,
  },
  username: {
    type: Number,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Users", UsersSchema);
