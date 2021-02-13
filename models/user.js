<<<<<<< HEAD
//----------------Uncomment this page when we are ready to use login credentials-------------------
// creating User Model(table) in `recipeHub_db` via sequelize

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        // Associating User with Recipe
        User.hasMany(models.Recipe, {
            onDelete: "cascade"
        });
    };

    return User;
};
=======
module.exports = function(sequilize, DataTypes){
    var User = sequilize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return User;
}
>>>>>>> 4b9123b3f2a6352c155d77055032a2ab5a309f5d
