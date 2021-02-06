// HTML Routes to direct user to approriate HTML page 
var path = require("path");

module.exports = function (app) {
    // Basic route that sends the user to the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
};