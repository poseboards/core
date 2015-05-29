var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.getUploads = function(req, res) {
  Uploads.find(function(err, uploads) {
    if (err) res.send(err);
    console.log(uploads);
    res.render('uploads/index', {upload: uploads});
  });
};

exports.postUploads = function(req, res) {
  Upload.create(new Upload({
    title       : req.body.title,
    binary      : req.body.binary,
    description : req.body.description,
    category    : req.body.category,
    width       : req.body.width,
    height      : req.body.height,
    fps         : req.body.fps
  }), req.body.password, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Animation successfully uploaded!'});
  });
};