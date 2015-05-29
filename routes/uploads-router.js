var express = require('express');
var multer = require('multer');

var uploads = express.Router();


uploads.get('/', function(req, res) {
  res.render('uploads/index', {greeting: 'Upload something.'});
});

uploads.post('/', function(req, res){
    console.log(req.body); // form fields
    console.log(req.files); // form files
    res.status(204).end('Successfully uploaded!');
});

uploads.get('/upload', function(req, res) {
  res.render('uploads/new');
});

module.exports = uploads;