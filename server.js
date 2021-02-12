require('dotenv').config();

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
