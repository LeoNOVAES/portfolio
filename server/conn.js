const mysql = require('mysql');

module.exports = ()=>{
        return mysql.createConnection({
        hots:"localhost",
        user:'root',
        password:'',
        database:'portfolio'
    });
}