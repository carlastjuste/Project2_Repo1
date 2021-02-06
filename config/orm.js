var connection = require("../config/connection.js");

var orm = {
    selectWhere: function (tableInput,colTosearch,valOfCol,cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString,[tableInput, colTosearch, valOfCol] , function (err, result ){
           if(err) throw err;
           cb(result); 
        });
    },
}


module.exports = orm; 





