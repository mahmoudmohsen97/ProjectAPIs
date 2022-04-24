const mongoose = require("mongoose");

// defining assignment schema
const AssignmentSchema = mongoose.Schema({
  year: {
    type: Number,
    min: 1,
    max: 6,
    require: true,
  },
  CreatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  AssignmentQuestions:[
    {
      question: {
        type: String,
        require: true,
      },
      answer: {
        type: String,
        require: true,
      },
      CreatedAt: {
        type: Date,
        default: () => Date.now(),
      },
  }],
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
