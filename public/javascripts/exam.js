async function submitExam(examId) {
    const exam = {
        id: examId,
        answers: []
    }
    var formData = new FormData(document.forms.examForm);
    formData.forEach((item) => {
        exam.answers.push(item)
    })
    console.log(exam);
    var http = new XMLHttpRequest();
    var url = "exam";
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/json");
    http.responseType = 'json';
    http.onload = function (e) {
        if (this.status == 200) {
            var scores = this.response.results;
            for (let index = 0; index < scores.length; index++) {
                const element = scores[index];
                const floatScore = parseFloat(element);
                const spanScore = document.getElementsByClassName("score-" + index);
                spanScore[0].textContent = element + " %";
            }
        }
    };
    var requestBody = JSON.stringify(exam);
    const response = await http.send(requestBody);
    console.log(
        response
    );
}
