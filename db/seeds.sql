INSERT INTO recipe (recipeName, ingredients, instructions, categoryType)
VALUES
    ("Spaghetti", "1 box Spaghetti, 1 15 ounce can Tomato Sauce, Parmesan", "Cook spaghetti according to package directions.
Spoon sauce over drained spaghetti noodles and sprinkle with parmesan cheese.", "Italian");


  INSERT 
  INTO GroceryLists 
      (groceryListName
       , createdAt
       , updatedAt
      )  
   values
     ('Walmart Shopping list'
     , CURDATE()
     , CURDATE()
     );
     INSERT 
  INTO GroceryLists 
      (groceryListName
       , createdAt
       , updatedAt
      )  
   values
     ('Wholefood Shopping list'
     , CURDATE()
     , CURDATE()
     );