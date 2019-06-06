"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _index = require("../constrollers/index.controller");

const api = new _express.Router();
api.get("/", _index.HelloWorld);
var _default = api;
exports.default = _default;