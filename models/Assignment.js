const mongoose = require("mongoose");
// defining assignment Questions schema
const AssignmentQuestionSchema = mongoose.Schema([
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
  },
]);
// defining assignment schema
const AssignmentSchema = mongoose.Schema({
  Year: {
    type: Number,
    min: 1,
    max: 6,
    require: true,
  },
  CreatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  AssignmentQuestions: AssignmentQuestionSchema,
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
module.exports = mongoose.model("AssignmentQuestions", AssignmentQuestionSchema);

