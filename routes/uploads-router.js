var express = require('express');

var uploads = express.Router();


uploads.get('/', function(req, res) {
  res.render('uploads/index', {greeting: 'Uploads Galore!'});
});

uploads.post('/', function(req, res){
    res.redirect('/animations/success');
});

uploads.get('/upload', function(req, res) {
  res.render('uploads/new', {message: 'Uploade something!'});
});

uploads.get('/success', function(req, res) {
  res.render('uploads/show', {message: '2589bfd53166ea3b5c46e55294a69dca.gif'});
});

module.exports = uploads;