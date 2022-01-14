const mysql = require("mysql2");

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'crm',
    password:'canyoudance78@#'
})
module.exports = pool.promise();