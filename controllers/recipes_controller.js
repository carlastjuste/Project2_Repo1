const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
// html routes/ index/ recipes search/ recipes
// get route -> index
router.get('./Recipes', (req, res) => {
    // send us to the next get function instead.
    res.redirect('/burgers');
});


// Requiring our Recipe model
var db = require("../models");
// requiring axios for web api connection 
var axios = require("axios");

// api route to get all recipes from recipes table
router.get('/recipes', async (req, res) => {
    try {
        const dbRecipes = await db.Recipe.findAll({

        }).map((el) => el.get({ plain: true }));

        // display recipes on recipes-search-result
        const hbsObject = {
            recipes: dbRecipes,
        };
        return res.render('Recipes-Search-Result', hbsObject);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// api post route to create recipe
router.post('/api/recipes/create', async (req, res) => {

    const newRecipe = new db.Recipe({
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        categoryType: req.body.categoryType,
    });
    try {
        const dbRecipe = await newRecipe.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
});

//api route to get recipes from selected category 
router.get("/api/recipes/category/:categoryType", function (req, res) {
    db.Recipe.findAll({
        where: {
            categoryType: req.params.categoryType
        }
    })
        .then(function (dbRecipe) {
            res.json(dbRecipe);
        });
});

//--------third party API post route----------
router.post("/api/convert", function (req, res) {

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

module.exports = router;