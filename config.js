const mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'JCadmin#db',
    database : 'knex'
});

try {
    connection.connect();
} catch(e) {
    console.log('Database Connection failed:' + e);
}

module.exports = connection;