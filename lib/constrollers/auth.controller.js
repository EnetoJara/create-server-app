"use strict";

const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports.signin = signin;
exports.signout = signout;
exports.hasAuthorization = hasAuthorization;
exports.requireSignin = void 0;

const _objectSpread2 = _interopRequireDefault(
	require("@babel/runtime/helpers/objectSpread")
);

const _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

const _expressJwt = _interopRequireDefault(require("express-jwt"));

const _user = _interopRequireDefault(require("../models/user.model"));

const _config = _interopRequireDefault(require("../../config/config"));

const _user2 = require("../utils/user.validator");

/**
 * grand access
 * @public
 * @export
 * @path {POST} /api/signin
 * @Request {Request} req HttpRequest object
 */
async function signin (req, res) {
	const credentials = (0, _objectSpread2.default)({}, req.body);
	const isValid = (0, _user2.validateSignin)(credentials);
	if (isValid.errors)
		return res.status(400).send((0, _objectSpread2.default)({}, isValid));

	try {
		const found = await _user.default.findOne({
			email: credentials.email,
		});

		if (!found) {
			return res.status(404).send({
				message: "user not found! Who do you think this is, BRAH!",
			});
		}

		if (!found.authenticate(credentials.password)) {
			return res.status(401).send({
				message: "Is you play or whats good, yow shit did not match",
			});
		}

		const notImportant = _jsonwebtoken.default.sign(
			{
				_id: found._id,
			},
			_config.default.jwtSecret
		);

		res.cookie("t", notImportant, {
			expire: new Date() + 3000,
		});
		return res.status(200).json({
			token: "Bearer " + notImportant,
			user: {
				_id: found._id,
				name: found.name,
				email: found.email,
			},
		});
	} catch (e) {
		return res.status(500).send({
			message:
				"How About if you try to signin later, you just broke me. BRAH!",
			error: e,
		});
	}
}

function signout (req, res) {
	res.clearCookie("t");
	return res.status("200").json({
		message: "signed out",
	});
}

const requireSignin = (0, _expressJwt.default)({
	secret: _config.default.jwtSecret,
	userProperty: "auth",
});
exports.requireSignin = requireSignin;

function hasAuthorization (req, res, next) {
	const authorized =
		req.profile && req.auth && req.profile._id === req.auth._id;

	if (!authorized) {
		return res.status(403).json({
			error: "User not authorized",
		});
	}

	next();
}
