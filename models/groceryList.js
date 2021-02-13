// grocery_list model definition
module.exports = function (sequelize, DataTypes) {
    var GroceryList = sequelize.define("groceryList", {

        groceryListId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
    },
        groceryListName:{
            type: DataTypes.STRING,
            allowNull: false
    }
    });
    return GroceryList;
};


// //Sync with DB
// grocery_list.sync();


