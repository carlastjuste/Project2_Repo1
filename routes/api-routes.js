// Requiring our Recipe model
var db = require("../models");
// requiring axios for web api connection 
var axios = require("axios");

// ------------------------------Exporting Routes----------------------------------------------------
module.exports = function (app) {

    // GET route for getting all of the recipes from our database
    app.get("/api/recipes", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Recipe.findAll({}).then(function (dbRecipe) {
            // We have access to the recipes as an argument inside of the callback function
            res.json(dbRecipe);
        });
    });

    //--------third party API post route----------
    app.post("/api/convert", function (req, res) {

        var options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert',
            params: {
                ingredientName: req.body.name,
                targetUnit: req.body.target,
                sourceUnit: req.body.unit,
                sourceAmount: req.body.amount
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            },
        };

        axios.request(options).then(function (response) {
            res.send(response.data);
        }).catch(function (err) {
            res.send(err);
        });
    });
};