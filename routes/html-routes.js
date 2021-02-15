var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Basic route that sends the user to thee home page
    app.get("/", function (req, res) {
        res.render("index")
    });
    app.get("/recipes", function (req, res) {
        res.render("recipes")
    });
    app.get("/myrecipes", function (req, res) {
        res.render("myrecipes")
    });
};

var db = require("../models");

router.get('/myrecipes', async (req, res) => {
    try {
        const dbRecipes = (await db.Recipe.findAll({

        })).map((el) => el.get({ plain: true }));

        // display recipes on recipes-search-result
        const hbsObject = {
            recipes: dbRecipes,
        };
        console.log(hbsObject)
        return res.render('myrecipes', hbsObject);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);

    }
});
