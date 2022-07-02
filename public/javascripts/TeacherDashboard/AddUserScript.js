function submitFormData(event) {
    var usertype = event.usertype.value;
    var userID = event.userID.value;
    var year = event.year.value;
    if(usertype == "Teacher"){
        usertype= true;
    }else{usertype=false;}
    
    var http = new XMLHttpRequest();
    var url = "/teacher/adduser";
    http.open("POST", url, true);
    //Send the header information
    http.setRequestHeader("Content-type", "application/json");
    // Send params with request""
    var requestBody = JSON.stringify({
        year:year,
        usertype:usertype,
        username:userID,
        password:userID
    });
    console.log(requestBody)
    if(userID.length !== 14){
        Swal.fire(
            'user ID',
            'user ID Wil be Username and Password and Must be 14 Number',
            'info'
          )
    }else{
        http.send(requestBody);
        Swal.fire(
            'New user',
            'User added successfully',
            'success'
          )
    }
  }