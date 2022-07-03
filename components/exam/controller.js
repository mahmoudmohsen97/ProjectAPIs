const service = require('./service');
const { ObjectId } = require('mongodb');

class Controller {

    constructor() { }

    async evaluateExam(req, res) {
        try {
            const examId = ObjectId((req.body.id).trim());
            const studentAnswers = req.body.answers;
            const assignment = await service.findAssignmentById(examId);
            console.log(assignment);
            const results = [];
            for (let index = 0; index < studentAnswers.length; index++) {
                console.log(index);
                let evaluationScore = await service.evaluateAnswer(studentAnswers[index], assignment.AssignmentQuestions[index].answer);
                results.push(evaluationScore);
            }
            res.send({
                results
            });
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Controller();