var express = require('express');
var UploadsCtrl = require('../controllers/uploads-ctrl'),
           getUploads = UploadsCtrl.getUploads,
          postUploads = UploadsCtrl.postUploads,
            getUpload = UploadsCtrl.getUpload,
            newUpload = UploadsCtrl.newUpload;
var uploads = express.Router();


uploads.route('/')
  .get(getUploads)
  .post(postUploads);

uploads.route('/:id')
  .get(getUpload);


module.exports = uploads;