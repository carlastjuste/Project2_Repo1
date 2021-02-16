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
  console.log('nous sommes la');
  try {
    /*const dbGroceryLists = await db.GroceryList.findAll({
      include: [
        {
          model: db.GroceryList,
          attributes: ['groceryListId', 'groceryListName'],
        },
      ],
      order: [['groceryListName', 'ASC']],

    }).map((el) => el.get({ plain: true }));
    
    console.log(dbGroceryLists);
    const hbsObject = {
      grocerylists: dbGroceryLists,
    };
    return res.json('grocerylist', hbsObject);
*/
  
  const dbGroceryLists = await db.GroceryList.findAll({})
    .then( lst => {
    console.log(lst);
    /*return res.status(200).json({
       status:1,
       message: "data found",
       data: lst
    });*/
 
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
  // res.render("grocerylist", {testkey: "Item1"})
})

module.exports = router;



