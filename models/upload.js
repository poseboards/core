var express = require('express');
var mongoose = require('mongoose');
var multer = require('multer');
var uploadSchema = require('../config/schema').upload();
var multer = require('multer');

var app = express();

uploadSchema.pre('save', function(next) {
  
  var upload = this;
  console.log('I eat: ', upload);
  next();

});



module.exports = mongoose.model('Upload', uploadSchema);