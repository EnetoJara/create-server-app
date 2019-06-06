"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../config/config"));

var _express = _interopRequireDefault(require("./express"));

const {
  log
} = console;
_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(_config.default.mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true
});

_mongoose.default.connection.on("error", function () {
  throw new Error(`unable to connect to database ${_config.default.mongoUri}`);
});

const server = (0, _express.default)();
server.listen(_config.default.port, function () {
  log(`
		server running or some shit
		Server listening on http://localhost:${_config.default.port} in ${_config.default.env}
		`);
});