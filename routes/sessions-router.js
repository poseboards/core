var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var SessionsCtrl = require('../controllers/sessions-ctrl');

var sessions = express.Router();

sessions.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err) 
    }
    if (!user) {
      return res.json({message: 'Sorry, we can\'t let you in.'});
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.json({message: 'Welcome back.'});
    });
  })(req, res, next);
});

sessions.get('/logout', function(req, res) {
  req.logout();
  res.json({message: 'Thanks, see you soon.'});
});

module.exports = sessions;