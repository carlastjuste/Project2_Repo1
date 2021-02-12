//creating Recipe Model(table) in `recipehub_db` via sequelize

module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
        recipeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        categoryType: {
            type: DataTypes.STRING,
        }
    });
    return Recipe;
};