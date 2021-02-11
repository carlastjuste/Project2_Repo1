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
};