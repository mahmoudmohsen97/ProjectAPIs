const express = require("express");
const mongoose =require("mongoose");
const bodyparser= require('body-parser');
require('dotenv/config')
const port =3000
const app = express()
const teachRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');
const loginRouter = require('./routes/login');
const Assignment= require('./models/Assignment')
var path = require('path');




// view engine setup
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname,'public')))
app.set("view engine", "ejs")
// bodyparser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


//database connection
mongoose.connect(
    process.env.MONGO_URI
  )
  .then(()=>console.log('connected to database'))
  .catch(e=>console.log(e));

//import routes
app.use('/teacher', teachRouter)
app.use('/student', studentRouter)
app.use('/login', loginRouter)



//render teacher page
app.get("/teacher",(req, res)=>{
  res.render("teacher.ejs")
  console.log("teacher page rendered")
});

app.get("/student", async (req, res)=>{
   const assignment = await  Assignment.find({},{AssignmentQuestions:1 ,_id:0})
   console.log(assignment)
  res.render("student.ejs",assignment)
  console.log("student page rendered")
});
app.get("/login",(req, res)=>{
  res.render("login.ejs")
  console.log("login page rendered")
});


app.listen(port,() => console.log("connected to server"))











