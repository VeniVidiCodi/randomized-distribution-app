const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();  //allows the use of .env variables


//defines express app
const app = express();
const PORT = process.env.PORT || 3000;  //use environment port or use 3000 for development


app.use(express.static("public"));  //used to access static pages
app.use(cors());  //allows communication from outside server
app.use(express.json());  //allows parsing of JSON


//MongoDB connection
const uri = process.env.ATLAS_URI;  //URI is located in a local .env file
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//route for group CRUD
const groupRouter = require('./routes/group');
app.use('/group', groupRouter);


//starts listening on Port
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});




/*
//sends root page to client
app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");

});


//sends react app to client
app.post("/reactApp", function(req, res){
  res.sendFile(__dirname + "/views/react.html");
});


//sends client to results page
app.post("/resultsPage", function(req, res){
  res.sendFile(__dirname + "/views/resultsPage.html");
});

const id = require("./uniqueID.js")

console.log(id());
*/
