'use strict';

var response = require('./res');
var connection = require('./db');

exports.index = function (req, res) {
    response.ok("App running", res);
}

//get books
exports.getBooks = function (req, res) {
    connection.query('SELECT * FROM book', function (error, rows, fields) {
        if (error){
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    });
};