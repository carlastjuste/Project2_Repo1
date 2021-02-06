//creating Recipe Model(table) in `recipeHub_db` via sequelize

module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define("recipe", {
        recipeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        recipeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredientName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        unit: {
            type: {
                type: DataTypes.ENUM,
                values: ['cup(s)', 'tbsp(s)', 'tsp(s)']
            }
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        categoryType: {
            type: DataTypes.STRING,
        }
    });
    //------The Association below will only work once we use the User Table----------------------
    // Recipe.associate = function (models) {
    //     // We're saying that a Recipe should belong to a User
    //     Recipe.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Recipe;
};