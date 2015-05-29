var express = require('express');

exports.getUploads = function(req, res) {
  Uploads.find(function(err, uploads) {
    if (err) res.send(err);
    console.log(uploads);
    res.render('uploads/index', {upload: uploads});
  });
}