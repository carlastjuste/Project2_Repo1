INSERT INTO recipes (recipeName, ingredients, instructions, categoryType)
VALUES
    ("Spaghetti", "1 box Spaghetti, 1 15 ounce can Tomato Sauce, Parmesan", "Cook spaghetti according to package directions.
Spoon sauce over drained spaghetti noodles and sprinkle with parmesan cheese.", "Italian"),
("Peanut Butter and Jelly", "2 slices bread, peanut butter, jelly", "Spread peanut butter and jelly on bread", "lunch");

INSERT INTO GroceryLists (groceryListName, createdAt, updatedAt )  
values ('Walmart Shopping list', CURDATE(), CURDATE());
INSERT INTO GroceryLists (groceryListName, createdAt, updatedAt ) 
values ('Wholefood Shopping list', CURDATE(), CURDATE()); 
INSERT INTO GroceryLists (groceryListName, createdAt, updatedAt ) 
values ('List for Spaghetti recipe', CURDATE(), CURDATE()); 
