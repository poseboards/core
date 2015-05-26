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

};

exports.getUser = function(req, res) {

};

exports.putUser = function(req, res) {

};

exports.deleteUser = function(req, res) {

};