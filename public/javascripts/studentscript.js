var xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
                var task =xhttp.response[0]
                console.log(task)
          }
        xhttp.open("GET", "student/SendQuestionToStudent", true);
        xhttp.send();