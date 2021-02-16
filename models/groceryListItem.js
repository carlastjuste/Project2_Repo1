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
    GroceryListItem.belongsTo(models.GroceryList, {
      foreignKey: {
        name:'groceryListId'
        ,allowNull: false
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