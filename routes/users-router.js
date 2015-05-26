var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var UsersCtrl = require('../controllers/users-ctrl');

var users = express.Router();

users.route('/')
  .get(UsersCtrl.getUsers)
  .post(UsersCtrl.postUsers);

users.route('/:id')
  .get(UsersCtrl.getUser)
  .put()
  .delete();

module.exports = users;