const mongoose = require("mongoose");

const AssignmentSchema = mongoose.Schema({
  AssignmentQuestions: [{
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }],

  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Assignment", AssignmentSchema);