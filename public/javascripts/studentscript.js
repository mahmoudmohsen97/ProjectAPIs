var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
                document.getElementById("QuestionHead").innerHTML=xhttp.responseText
        }
        xhttp.open("GET", "student/SendQuestionToStudent", true);
        xhttp.send();