const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
var db = require("../models");
var axios = require("axios");

//Render Add Recipe Page
router.get("/add-recipe", function (req, res) {
    res.render("add-recipe");
});

//Render Recipes Page
router.get("/recipes", function (req, res) {
    res.render("recipes");
});

// api route to search by recipe name
router.get('/search-recipe-name', function (req, res) {
    console.log(req.params)
    // db.Recipe.findAll({
    //     where: {
    //         recipeName : req.body.recipeName
    //     }
    // }).then(function (dbRecipe) {
    //     const newObject = {
    //         recipes: dbRecipe
    //     }
    //     res.render("recipes", newObject);
    // });
})

// api route to get all recipes from recipes table
router.get('/search-all-recipes', function (req, res) {
    db.Recipe.findAll({}).then(function (dbRecipe) {
        console.log(dbRecipe)
        const newObject = {
            recipes: dbRecipe
        }
        res.render("recipes", newObject);
    });
});

// api post route to create recipe
// router.post('/recipes/create', async (req, res) => {

    // const newRecipe = new db.Recipe({
    //     recipeName: req.body.recipeName,
    //     ingredients: req.body.ingredients,
    //     instructions: req.body.instructions,
    //     categoryType: req.body.categoryType,
    // });
    // try {
    //     const dbRecipe = await newRecipe.save();
    //     res.redirect('/');
    // } catch (err) {
    //     res.status(500).json(err); console.log(err)
    // }
// });

//api route to get recipes from selected category 
// router.get("/api/recipes/category/:categoryType", function (req, res) {
    // db.Recipe.findAll({
    //     where: {
    //         categoryType: req.params.categoryType
    //     }
    // })
    //     .then(function (dbRecipe) {
    //         res.json(dbRecipe);
    //         //res.render("recipes", {})
    //     });
// });

//--------third party API post route w info from convert.js----------
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