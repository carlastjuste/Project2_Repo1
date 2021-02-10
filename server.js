require('dotenv').config();

//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");

// Sets up an instance of the Express App
var app = express();

//Set the port for app
var PORT = process.env.PORT || 8080;

//Set handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
  });
})