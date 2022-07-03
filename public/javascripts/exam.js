function submitExam(examId) {
    const exam = {
        id : examId,
        answers : []
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
    var requestBody = JSON.stringify(exam);
    http.send(requestBody);
}
