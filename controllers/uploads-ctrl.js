var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Upload = require('../models/upload');
var multer = require('multer');



exports.getUploads = function(req, res) {
  Upload.find(function(err, uploads) {
    if (err) res.send(err);
    console.log(uploads);
    res.render('uploads/index', {uploads: uploads});
  });
};

exports.postUploads = function(req, res) {
  console.log('mcblovin: ', req.files);
  var upload = new Upload({
    title      : req.body.title,
    filename   : req.files.dougs.name
  });

  upload.save(function(err) {
    if (err) return console.log(err); 
    console.log('Me just saved: ', upload);
    res.redirect('/animations');
  });
};