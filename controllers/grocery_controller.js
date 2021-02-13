const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();


//Add dependencies
const db = require("../models");

//==============================//
//API routes for Grocery list
//=============================//
module.exports = function (app){

    //Retreive all grocery list with item
app.get("api/grocerylists", function(req, res){
    db.GroceryList.findAll({})
    .then(function(dbGroceryList){
        res.json(dbGroceryList);
    })
})
    
}


