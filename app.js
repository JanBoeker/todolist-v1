//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {

  var today = new Date();
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  var day = today.toLocaleDateString('en-US', options);

  res.render("list.ejs", {
    kindOfDay: day
  });

});

app.post("/", function(req,res){
  console.log(req.body.newItem);
});


app.listen(3000, function() {
  console.log("Server running on port 3000");
});
