"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = require("../constrollers/auth.controller");

const api = new _express.Router();
api.post("/signin", _auth.signin);
api.get("/signout", _auth.signout);
var _default = api;
exports.default = _default;