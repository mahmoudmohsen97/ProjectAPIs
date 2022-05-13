var AssignmentQuestionsParams=[]


function resetFormData(event){
    var question = event.question.value;
    var answer = event.answer.value;
    AssignmentQuestionsParams.push("question=" + question +"answer=" + answer)
}

function submitFormData(event) {
    var year = event.year.value;
    var yearparams = "year="+ year
    // console.log(yearparams)
    // console.log(AssignmentQuestionsParams)
    var http = new XMLHttpRequest();
    var url = "teacher/add_question";
    http.open("POST", url, true);
    //Send the header information
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Send params with request
    http.send();
}
