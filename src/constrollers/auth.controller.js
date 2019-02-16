import jwt from "jsonwebtoken";

import User from "../models/user.model";
import config from "./../../config/config";
import { validateSignin } from "../utils/user.validator";

export async function signin (req, res) {
	const credentials = { ...req.body, };
	const isValid = validateSignin(credentials);
	if (isValid.errors) return res.status(400).send({ ...isValid, });
	try {
		const found = await User.findOne({ email: credentials.email, });
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
		const notImportant = jwt.sign({ _id: found._id, }, config.jwtSecret);
		res.cookie("t", notImportant, { expire: new Date() + 3000, });

		return res.status(200).json({
			token: "Bearer " + notImportant,
			user: { _id: found._id, name: found.name, email: found.email, },
		});
	} catch (e) {
		return res.status(500).send({
			message:
				"How About if you try to signin later, you just broke me. BRAH!",
			error: e,
		});
	}
}
