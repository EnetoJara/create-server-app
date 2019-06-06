"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

function _default() {
  const app = new _express.default();
  app.use((0, _compression.default)());
  app.use((0, _helmet.default)());
  app.use(_bodyParser.default.json());
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
  app.use((0, _cookieParser.default)());
  app.use((0, _cors.default)());
  app.use(_index.default);
  app.use("/api/auth", _auth.default);
  app.use("/api/users", _user.default);
  app.use(function (err, req, res) {
    if (err.name === "UnauthorizedError") {
      res.status(401).json({
        error: err.name + ": " + err.message
      });
    }
  });
  return app;
}