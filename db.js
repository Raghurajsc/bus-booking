const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Raghuraj@1',
    database: 'college'
});

module.exports = connection;