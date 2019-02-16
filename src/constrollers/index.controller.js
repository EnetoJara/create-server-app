function HelloWorld (req, res) {
	return res.status(200).send({
		message: "welcome to where ever the fcuk we are!",
	});
}

export { HelloWorld };
