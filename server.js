
  require('dotenv').config();

  //Dependencies
  var express = require("express");  
  var exphbs = require("express-handlebars");

  // Sets up an instance of the Express App
  var app = express();
  
  //Set the port of our App
  var PORT = process.env.PORT || 3000;

  //Set handlebars as the default templating engine
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
  
  
  app.use(express.static("public"));
  
  // Parse request body as JSON
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  // Import routes and give the server access to them.
  var routes = require("./controllers/recipes_controller.js");
  
  app.use(routes);
  
  app.listen(PORT, function () {
      console.log("App now listening at localhost:" + PORT);
  });