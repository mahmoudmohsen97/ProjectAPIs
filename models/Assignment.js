const mongoose = require("mongoose");

// defining assignment schema
const AssignmentSchema = mongoose.Schema({
  year: {
    type: Number,
    min: 1,
    max: 4,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  AssignmentQuestions: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      CreatedAt: {
        type: Date,
        default: () => Date.now(),
      },
    },
  ],
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
