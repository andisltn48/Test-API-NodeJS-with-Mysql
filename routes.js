'use strict';

module.exports = function (app) {
    var myJson = require('./controller');

    app.route('/').get(myJson.index)
    app.route('/book').get(myJson.getBooks)
    app.route('/book/:id').get(myJson.getBookById)
}