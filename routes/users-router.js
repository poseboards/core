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
  .get(UsersCtrl.getUsers)
  .post(UsersCtrl.postUsers);

users.route('/:username')
  .get(UsersCtrl.getUser)
  .put(UsersCtrl.putUser)
  .delete(UsersCtrl.deleteUser);

module.exports = users;