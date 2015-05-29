var express = require('express');
var multer = require('multer');

var app = express();

module.exports = function(multer) {

  app.use(multer({dest: './files/'}));

};