"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports.HelloWorld = HelloWorld;

function HelloWorld (req, res) {
	return res.status(200).send({
		message: "welcome to where ever we are!",
	});
}
