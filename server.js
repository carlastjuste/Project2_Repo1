// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Routes
// =============================================================

// Basic route that sends the user to thee home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
