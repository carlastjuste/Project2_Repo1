// --------------------------Nice To Have-----------------
//creating Groceries Model(table) in `recipeHub_db` via sequelize

module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
        }
    });
    return Ingredient;
};