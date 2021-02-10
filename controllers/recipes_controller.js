var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var recipe = require("../models/recipe.js");

//gets all recipes via selectAll orm 
router.get("/", function (req, res) {

    recipe.selectWhere(function (data) {

        var rObject = {
            recipes: data
        };

        res.render("index", rObject);
    });
});

// Export routes for server.js to use.
module.exports = router;