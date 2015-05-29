var express   = require('express');
var passport  = require('passport');
var User      = require('../models/user');
var UsersCtrl = require('../controllers/users-ctrl'),
     getUsers = UsersCtrl.getUsers,
    postUsers = UsersCtrl.postUsers,
      getUser = UsersCtrl.getUser,
      putUser = UsersCtrl.putUser,
   deleteUser = UsersCtrl.deleteUser;


var users = express.Router();

users.route('/')
  .get(getUsers)
  .post(postUsers);

users.route('/:username')
  .get(getUser)
  .put(putUser)
  .delete(deleteUser);

module.exports = users;