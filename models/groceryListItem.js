module.exports= function(sequelize, DataTypes) {

var GroceryListItem = sequelize.define('GroceryListItem', {
    itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    itemDescription:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    itemQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    groceryListId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

GroceryListItem.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    GroceryListItem.belongsTo(models.GroceryList, {
      foreignKey: {
        allowNull: false
      }
    });
  };

return GroceryListItem;

};


// //Drop and Create grocery_list table
// groceryListItem.sync({force: true}).then(function() {

//     return item.create({
//         itemId:1,
//         itemDescription: 'List Template'

//     })
// }