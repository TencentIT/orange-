const mysql = require("mysql");
var pool = mysql.createPool({
    host:"39.105.101.78",
    user:"orange",
    password:'wjq970706',
    database:'orange',
    connectionLimit:10
});

module.exports = pool;