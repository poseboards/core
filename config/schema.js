var mongoose = require('mongoose');

exports.user = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    password    : {type: String, required: true},
    email       : {type: String, required: true, unique: true},
    username    : {type: String, required: true, unique: true},
    uploads     : []
  });
};

exports.upload = function() {
  return new mongoose.Schema({
    title       : {type: String},
    filename    : {type: String},
    createdAt   : {type: Date, default: Date.now}
  });
};