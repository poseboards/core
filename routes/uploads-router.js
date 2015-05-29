var express = require('express');
var uploader = require('../config/multer');

var uploads = express.Router();

uploads.get('/', function(req, res) {
  res.render('uploads/index', {greeting: 'Upload something.'});
});

uploads.post('/', function(req, res){
  console.log(req.body);
  console.log(req.files);
  res.status(204).end();
});

uploads.get('/upload', function(req, res) {
  res.render('uploads/show');
});

module.exports = uploads;