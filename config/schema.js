var moongoose = require('mongoose');

exports.user = function() {
  return new mongoose.Schema({
    name     : {type: String, required: true},
    password : {type: String, required: true},
    email    : {type: String, required: true, unique: true},
    username : {type: String, required: true, unique: true}
  });
};