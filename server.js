const express = require("express");
const mongoose =require("mongoose");
const bodyparser= require('body-parser');
const app = express()
require('dotenv/config')
const port =3000
const teachRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');
const loginRouter = require('./routes/login');

const examComponent = require('./components/exam');
var path = require('path');



// view engine setup
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname,'public')))
app.set("view engine", "ejs")
// bodyparser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

//database connection
mongoose.connect(
    process.env.MONGO_URI
  )
  .then(()=>console.log('connected to database'))
  .catch(e=>console.log(e));

//import routes
app.use('/exam', examComponent.Router)
app.use('/teacher', teachRouter)
app.use('/student', studentRouter)
app.use('/login', loginRouter)




//render teacher page






app.listen(port,() => console.log("connected to server"))











