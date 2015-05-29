var express = require('express');
var uploader = require('./config/multer');

var uploads = express.Router();

uploads.post('/', function(req, res){
  console.log(req.body);
  console.log(req.files);
  res.status(204).end();
});