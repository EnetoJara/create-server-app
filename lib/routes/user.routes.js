"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../constrollers/user.controller");

const api = new _express.Router();
api.post("/create", _user.create);
var _default = api;
exports.default = _default;