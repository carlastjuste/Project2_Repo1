require('dotenv').config();


//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models")
// Sets up an instance of the Express App
var app = express();

//Set the port for app
var PORT = process.env.PORT || 8080;

//Set handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static("public"));
var express = require('express');
var exphbs = require('express-handlebars');

// bring in the models and routes
var db = require('./models');
var routes = require('./controllers/recipes_controller');

var PORT = process.env.PORT || 8080;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      renderUrl: (value) => (value === '/burgers' ? true : false),
    },
  }),
);
app.set('view engine', 'handlebars');

app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT http://localhost:' + PORT);
  });
});
