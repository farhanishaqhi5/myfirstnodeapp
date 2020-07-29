const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
// var passport = require("passport");
const mongoose = require('mongoose');
const config = require('./config/database');


//Database Connect
mongoose.connect("mongodb://127.0.0.1:27017/myuseDB",{useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true }, function (err, db) {

  if(err) throw err;

  //Write databse Insert/Update/Query code here..

});

mongoose.connection.on('connected', () => {
  console.log('connected to database' );
});

mongoose.connection.on('error', (err) => {
  console.log('Database Error' + err);
});

const app = express();

const coaches = require('./routers/assignment');

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit: '3mb', extended: true}));
app.use(bodyParser.json({limit: '3mb'}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// require('./config/passport')(passport);

// app.use('/assignemt', assignemt);

//Index Route
app.get('/', (req, res) =>{

  res.send("This is assignement");
  // console.log("This is assignement");
});

//Start Server
app.listen(port, ()=>{
  console.log('Server started on port ' + port);
});

//for AWS Lambda
module.exports = app;
