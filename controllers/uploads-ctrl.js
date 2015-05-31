var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Upload = require('../models/upload');

exports.getUploads = function(req, res) {
  Uploads.find(function(err, uploads) {
    if (err) res.send(err);
    console.log(uploads);
    res.render('uploads/index', {upload: uploads});
  });
};

exports.postUploads = function(req, res) {
  Upload.create(new Upload({
    title     : req.body.title,
    filename  : req.body.dougs
  }), function(err, upload) {
      if (err) {
        res.send(err);
        console.log(upload);
      }
      res.redirect('/animations/success')
  });
};