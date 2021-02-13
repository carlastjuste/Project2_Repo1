module.exports = function(sequilize, DataTypes){
    var User = sequilize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return User;
}