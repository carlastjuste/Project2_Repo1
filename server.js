require('dotenv').config();

<<<<<<< HEAD

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
=======
//Dependencies
>>>>>>> 4b9123b3f2a6352c155d77055032a2ab5a309f5d
var express = require('express');
var exphbs = require('express-handlebars');

// bring in the models and routes
var db = require('./models');
var RoutesRecipe = require('./controllers/recipes_controller');
var RoutesGrocery = require('./controllers/grocery_controller');


//Set Express App
var app = express();
var PORT = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

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

app.use(RoutesRecipe);
app.use(RoutesGrocery);


//Start the Server when the Db is ready to use
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT http://localhost:' + PORT);
  });
});
