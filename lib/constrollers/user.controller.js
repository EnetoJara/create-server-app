"use strict";
const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: !0, }),
(exports.create = create);
const _objectSpread2 = _interopRequireDefault(
		require("@babel/runtime/helpers/objectSpread")
	),
	_user = _interopRequireDefault(require("../models/user.model")),
	_error = _interopRequireDefault(require("../utils/error.handler")),
	_user2 = require("../utils/user.validator");
function create (a, b) {
	const c = (0, _user2.validatesCreateUser)(
		(0, _objectSpread2.default)({}, a.body)
	);
	if (c.errors) return b.status(400).send((0, _objectSpread2.default)({}, c));
	const d = new _user.default((0, _objectSpread2.default)({}, a.body));
	d.save(function (a) {
		return a
			? b.status(400).json({ errors: _error.default.getErrorMessage(a), })
			: b.status(201).json({ message: "Successfully signed up!", });
	});
}
