var mysql = require('mysql');
var con = mysql.createConnection({
    host: "35.197.44.151",
    user: "root",
    password: "root",
    port: "3306", 
    database: "elective"
    });
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE elective", function (err, result) {
if (err) throw err;
console.log("Database created");
con.end();
});

});