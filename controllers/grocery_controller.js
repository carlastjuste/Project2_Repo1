const express = require('express');
const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const router = express.Router();


//Add dependencies
const db = require("../models");

//Render Grocery List page
/*router.get("/groceryList", function (req, res) {
  res.render("groceryList");
});
*/

//==============================//
//API routes for Grocery list
//=============================//

// Retreive all grocery list 
router.get("/grocerylist", async (req, res) => {
  try {
  const dbGroceryLists = await db.GroceryList.findAll({})
    .then( lst => {
              const context = {
                grocerylists: lst.map(grocerylist => {
                  return {
                    groceryListName: grocerylist.groceryListName
                  }
                })
              }
        return res.render('grocerylist', context);
      });

  } catch (err) {
    return res.status(500).json(err);
  }
})

module.exports = router;



