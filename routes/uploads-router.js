var express = require('express');
var UploadsController = require('../controllers/uploads-ctrl'),
           getUploads = UploadsController.getUploads,
          postUploads = UploadsController.postUploads,
           getUpload = UploadsController.getUpload;

var uploads = express.Router();


uploads.route('/')
  .get(getUploads)
  .post(postUploads);
  
uploads.route('/:id')
  .get(getUpload);

uploads.get('/upload', function(req, res) {
  res.render('uploads/new', {message: 'Upload something!'});
});

module.exports = uploads;