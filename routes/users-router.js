var express = require('express');
var User = require('../models/user');
var UserCtrl = require('../controllers/users-ctrl');

var users = express.Router();