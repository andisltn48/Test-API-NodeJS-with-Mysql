const mysql = require('mysql');

// connect to database
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"testapi"
})

conn.connect((err) => {
    if(err) throw err;
    console.log('Database connected!');
})

module.exports = conn;