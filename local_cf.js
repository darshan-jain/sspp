var mysql = require('mysql2');





var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3307", 
    database: "elective"
    });
connection.connect(function (err) {
if (err) {
console.error('Database connection failed: ' + err.stack);
return;
}
console.log('Connected to RDS.');
});

exports.helloWorld = (req, res) => {
let name = req.body.name;
let roll = req.body.roll;
let eleco = req.body.eleco;
let elect = req.body.elect;

connection.query('INSERT INTO electiveinfo(name,rollno,elective1,elective2) VALUES (?,?,?,?);',[name,roll,eleco,elect], function (error, results, fields) {
if (error) throw error;


});


};