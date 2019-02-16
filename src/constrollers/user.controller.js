import User from "../models/user.model";
import errorHandler from "../utils/error.handler";
import { validatesCreateUser } from "../utils/user.validator";

export function create (req, res) {
	const isValid = validatesCreateUser({ ...req.body, });
	if (isValid.errors) return res.status(400).send({ ...isValid, });
	const user = new User({ ...req.body, });
	user.save((err) => {
		if (err) {
			return res
				.status(400)
				.json({ errors: errorHandler.getErrorMessage(err), });
		}
		return res.status(201).json({ message: "Successfully signed up!", });
	});
}
