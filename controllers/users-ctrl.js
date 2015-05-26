var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var SessionsCtrl = require('../controllers/sessions-ctrl');

exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);
    console.log(users);
    res.json({users: users});
  });
};

exports.postUsers = function(req, res) {
  User.register(new User({
    name     : req.body.name,
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }), req.body.password, function(err, user) {
      if (err) {
        console.log(err);
      }
      passpost.authenticate('local')(req, res, 
        function() {
        res.json({message: 'Welcome to Poseboards'});
      });
  });
};

exports.getUser = function(req, res) {
  User.findByUsername(req.params.username, function(err, user) {
    if (err) res.send(err);
    console.log(user);
    res.json({user: user});
  });
};

exports.putUser = function(req, res) {
  User.update({_id: req.params.id}, {
    name     : req.body.name,
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }, function(err) {
      if (err) res.send(err);
      res.json({message: 'Your profile has been updated!'});
  });
};

exports.deleteUser = function(req, res) {
  Post.remove({_id: req.params.id}, function(err) {
    if (err) res.send(err);
    res.json({message: 'You no longer exist.'});
  });
};