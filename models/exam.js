const mongoose = require("mongoose");

// defining assignment schema
const examSchema = mongoose.Schema({
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
    exam: [
        {
            question: {
                type: String,
                required: true,
            },
            studentAnswer: {
                type: String,
            },
            teacherAnswer: {
                type: String,
            },
            score: {
                type: Number,
                required: true
            }
        },
    ],
});

module.exports = mongoose.model("Exam", examSchema);
