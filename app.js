//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["buy food", "cook food", "eat food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Staitsche Dateien für die server based WebApp
app.use(express.static("public"));


app.get("/", function(req, res) {

  res.render("list.ejs", {
    listTitle: date.getDate(),
    newListItems: items
  });

});

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work", newListItems: workItems})
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
