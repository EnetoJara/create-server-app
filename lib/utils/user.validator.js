"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatesCreateUser = exports.validateSignin = void 0;

var _validator = require("validator");

var _util = require("util");

const validateSignin = function (user) {
  const res = {};
  const email = user.email || "";
  const password = user.password || "";
  res.errors = false;

  if ((0, _validator.isEmpty)(email)) {
    res.email = "email is required";
    res.errors = true;
  }

  if (!(0, _validator.isEmail)(email)) {
    res.email = "is not a valid email fortmat";
    res.errors = true;
  }

  if ((0, _validator.isEmpty)(password)) {
    res.password = "password is required";
    res.errors = true;
  }

  if (!(0, _validator.isLength)(password, {
    min: 6,
    max: 16
  })) {
    res.password = "password must be at least 6 characters long, and not greater than 15";
    res.errors = true;
  }

  return res;
};

exports.validateSignin = validateSignin;

const validatesCreateUser = function (user) {
  const name = user.name || "";
  const about = user.about || "";
  const password = user.password || "";
  const password2 = user.password2 || "";
  let res = {
    rerrors: false
  };
  res = validateSignin(user);

  if ((0, _validator.isEmpty)(name)) {
    res.name = "Name is required";
    res.errors = true;
  }

  if ((0, _util.isNumber)(name)) {
    res.name = "As long as I know, names are not numbers, unless you is a robot, are a robot ?";
    res.errors = true;
  }

  if ((0, _validator.isEmail)(name)) {
    res.name = "since when emails are valid names, get yow ass out of here with your non sence bull crap";
    res.errors = true;
  }

  if (!(0, _validator.isEmpty)(password) && password !== password2) {
    res.password2 = "passwords must match";
    res.errors = true;
  }

  if (!(0, _validator.isLength)(about, {
    min: 0,
    max: 250
  })) {
    res.about = "you should not pull yow whole life, come down. no more than 250 characters, please";
    res.errors = true;
  }

  return res;
};

exports.validatesCreateUser = validatesCreateUser;