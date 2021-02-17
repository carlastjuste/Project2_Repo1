require('dotenv').config();

//Dependencies
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

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    // helpers: {
    //   renderUrl: (value) => (value === '/recipes' ? true : false),
    // },
  })
);
app.set('view engine', 'handlebars');


app.use(RoutesRecipe);
app.use(RoutesGrocery)
app.get('/', (req, res) => res.render("index"));

//Start the Server when the Db is ready to use
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT http://localhost:' + PORT);
  });
});