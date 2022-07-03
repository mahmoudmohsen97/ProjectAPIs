const service = require('./service');
const { ObjectId } = require('mongodb');
const examModel = require("../../models/exam");

class Controller {

    constructor() { }

    async evaluateExam(req, res) {
        try {
            const examId = ObjectId((req.body.id).trim());
            const studentAnswers = req.body.answers;
            const assignment = await service.findAssignmentById(examId);
            console.log(assignment);
            const results = [];
            const examDetails = [];
            for (let index = 0; index < studentAnswers.length; index++) {
                console.log(index);
                let evaluationScore = await service.evaluateAnswer(studentAnswers[index], assignment.AssignmentQuestions[index].answer);
                examDetails.push({
                    question : assignment.AssignmentQuestions[index].question,
                    studentAnswer : studentAnswers[index],
                    teacherAnswer : assignment.AssignmentQuestions[index].answer,
                    score: evaluationScore
                })
                results.push(evaluationScore);
            }
            const new_exam = new examModel({
                year: assignment.year,
                exam: examDetails,
            });
            const exam = await new_exam.save();
            res.send({
                results
            });
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Controller();