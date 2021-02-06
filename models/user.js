//----------------Uncomment this page when we are ready to use login credentials-------------------
// creating User Model(table) in `recipeHub_db` via sequelize

// module.exports = function (sequelize, DataTypes) {
//     var User = sequelize.define("user", {
//         userId: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });

//     User.associate = function (models) {
//         // Associating User with Recipe
//         User.hasMany(models.Recipe, {
//             onDelete: "cascade"
//         });
//     };

//     return User;
// };