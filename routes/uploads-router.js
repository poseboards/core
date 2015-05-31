var express = require('express');
var UploadsController = require('../controllers/uploads-ctrl'),
           getUploads = UploadsController.getUploads,
          postUploads = UploadsController.postUploads;

var uploads = express.Router();


uploads.route('/')
  .get(getUploads)
  .post(postUploads);
  

uploads.get('/upload', function(req, res) {
  res.render('uploads/new', {message: 'Upload something!'});
});

uploads.get('/success', function(req, res) {
  res.render('uploads/show', {message: 'Successfully uploaded!'});
});

module.exports = uploads;