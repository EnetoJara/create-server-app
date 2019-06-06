"use strict";

const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports.create = create;

const _objectSpread2 = _interopRequireDefault(
	require("@babel/runtime/helpers/objectSpread")
);

const _user = _interopRequireDefault(require("../models/user.model"));

const _error = _interopRequireDefault(require("../utils/error.handler"));

const _user2 = require("../utils/user.validator");

function create (req, res) {
	const isValid = (0, _user2.validatesCreateUser)(
		(0, _objectSpread2.default)({}, req.body)
	);
	if (isValid.errors)
		return res.status(400).send((0, _objectSpread2.default)({}, isValid));
	const user = new _user.default((0, _objectSpread2.default)({}, req.body));
	user.save(function (err) {
		if (err) {
			return res.status(400).json({
				errors: _error.default.getErrorMessage(err),
			});
		}

		return res.status(201).json({
			message: "Successfully signed up!",
		});
	});
}
