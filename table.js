var mysql = require('mysql2');

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
  var sql = "CREATE TABLE electiveinfo (name VARCHAR(255), rollno VARCHAR(255),elective1 VARCHAR(255),elective2 VARCHAR(255),UNIQUE(rollno))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

    con.end();
  });

});