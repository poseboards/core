var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

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

};

exports.putUser = function(req, res) {

};

exports.deleteUser = function(req, res) {

};