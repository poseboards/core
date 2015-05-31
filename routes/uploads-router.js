var express = require('express');

var uploads = express.Router();


uploads.get('/', function(req, res) {
  res.render('uploads/index', {greeting: 'Uploads Galore!'});
});

uploads.post('/', function(req, res){
    res.redirect('/animations/success');
});

uploads.get('/upload', function(req, res) {
  res.render('uploads/new', {message: 'Upload something!'});
});

uploads.get('/success', function(req, res) {
  res.render('uploads/show', {message: 'Successfully uploaded!'});
});

module.exports = uploads;