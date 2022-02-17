'use strict';

var response = require('./res');
var connection = require('./db');

exports.index = function (req, res) {
    response.ok("App running", res);
}

//get all book
exports.getBooks = function (req, res) {
    connection.query('SELECT * FROM book', function (error, rows, fields) {
        if (error){
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    });
};

// get book by id
exports.getBookById = function (req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM book WHERE book_id = ?', (id), function (error, rows, fields) {
        if (error){
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    });
}