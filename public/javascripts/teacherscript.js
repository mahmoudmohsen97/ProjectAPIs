function submitFormData(event) {
    task_finished = false;
    // form values
    var year = event.year.value;
    var question = event.question.value;
    var answer = event.answer.value;
    var http = new XMLHttpRequest();
    var url = "teacher/add_question";
    var params="year=" + year + "&question=" + question +"&answer=" + answer; 
    http.open("POST", url, true);

    //Send the header information
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Send params with request
    http.send(params);
}
