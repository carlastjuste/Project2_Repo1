// grocery_list model definition
module.exports = function (sequelize, DataTypes) {
    var GroceryList = sequelize.define("GroceryList", {

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

    GroceryList.associate = function(models) {
        // Associating GroceryList with GroceryListItem
        // When an GroceryList is deleted, also delete any associated GroceryListItem
        GroceryList.hasMany(models.GroceryListItem, {
          onDelete: "cascade"
        });
      };

    return GroceryList;
};



