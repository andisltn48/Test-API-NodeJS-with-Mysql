'use strict';

module.exports = function (app) {
    var myJson = require('./controller');

    app.route('/').get(myJson.index)
    app.route('/book').get(myJson.getBooks)
    app.route('/book/:id').get(myJson.getBookById)
    app.route('/book').post(myJson.postBook)
    app.route('/book/:id').put(myJson.putBook)
    app.route('/book/:id').delete(myJson.deleteBook)
}