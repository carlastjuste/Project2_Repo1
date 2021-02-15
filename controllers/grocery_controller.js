const express = require('express');
const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const router = express.Router();


//Add dependencies
const db = require("../models");

//==============================//
//API routes for Grocery list
//=============================//

// Retreive all grocery list 
router.get("/grocerylist", async (req, res) => {
   try {
       const dbGroceryLists = await db.GroceryList.findAll({
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
         

   }catch (err) {
       return res.status(500).json(err);
   }
  // res.render("grocerylist", {testkey: "Item1"})
})

module.exports = router;



