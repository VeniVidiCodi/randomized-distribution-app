const express = require("express");
const bodyParser = require("body-parser");


//defines express app
const app = express();
const PORT = process.env.PORT || 3000;  //use environment port or use 3000 for development


//used to access static pages
app.use(express.static("public"));


//parses data from lient
app.use(bodyParser.urlencoded({extended:true}));


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


app.listen(PORT, function(){
  console.log("Listening on 3000");
});
