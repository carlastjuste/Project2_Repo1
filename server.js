// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

require('dotenv').config();

// Sets up Express App
var app = express();
var PORT  = process.env.PORT || 3000;

var db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var routes = require("./controllers/recipes_controller.js");

app.use(routes);

// Basic route that sends the user to thee home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

  
