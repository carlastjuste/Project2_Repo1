require('dotenv').config();

var express = require('express');
var exphbs = require('express-handlebars');


var db = require('./models');
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      renderUrl: (value) => (value === '/recipes' ? true : false),
    },
  }),
);

app.set('view engine', 'handlebars');

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT http://localhost:' + PORT);
  });
});
