var mongoose = require('mongoose');

exports.user = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    password    : {type: String, required: true},
    email       : {type: String, required: true, unique: true},
    username    : {type: String, required: true, unique: true},
    uploads     : [Uploads]
  });
};

exports.upload = function() {
  return new mongoose.Schema({
    title       : {type: String, required: true},
    binary      : {type: String, required: true},
    description : {type: String, required: true},
    category    : {type: String, required: true},
    width       : {type: Number, required: true},
    height      : {type: Number, required: true},
    fps         : {type: Number, required: true},
    createdAt   : {type: Date, default: Date.now},
    captions    : [Captions]
  });
};