"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _crypto = _interopRequireDefault(require("crypto"));

const UserSchema = new _mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+@.+\..+/, "Please fill a valid email address"],
    required: "Email is required"
  },
  about: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
  hashed_password: {
    type: String,
    required: "Password is required"
  },
  salt: String
});
UserSchema.virtual("password").set(function (password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashed_password = this.encryptPassword(password);
}).get(function () {
  return this._password;
});
UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";

    try {
      return _crypto.default.createHmac("sha1", this.salt).update(password).digest("hex");
    } catch (e) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  }
};
UserSchema.path("hashed_password").validate(function () {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password must bet at least 6 characters long");
  }

  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required");
  }
}, null);

var _default = (0, _mongoose.model)("User", UserSchema);

exports.default = _default;