var mysql = require("mysql");

var connection = mysql.createConnnect({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "recipehub_db",
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;
