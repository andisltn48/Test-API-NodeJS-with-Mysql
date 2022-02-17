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
    connection.query('SELECT * FROM book WHERE book_id = ?', [id], function (error, rows, fields) {
        if (error){
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    });
}

// create book
exports.postBook = function (req,res) {
    let book_name = req.body.book_name;
    let book_author = req.body.book_author;
    let book_publisher = req.body.book_publisher;

    connection.query('INSERT INTO book (book_name,book_author,book_publisher) VALUES (?,?,?)', [book_name,book_author,book_publisher], 
    function (error, rows, fields) {
        if (error){
            console.log(error);
        } else {
            response.ok("Create data successfully",res);
        }
    });
}

//edit book by id
exports.putBook = function (req,res) {
    let id = req.params.id;
    let book_name = req.body.book_name;
    let book_author = req.body.book_author;
    let book_publisher = req.body.book_publisher;
    
    connection.query('UPDATE book SET book_name=?, book_author=?, book_publisher=? WHERE book_id=?',
    [book_name,book_author,book_publisher,id], function (error, rows, fields) {
        if (error){
            console.log(error);
        } else {
            response.ok("Update data successfully",res);
        }
    });
}