function HelloWorld (req, res) {
	return res.status(200).send({
		message:
			"welcome to Neto's Company or if your EGO is to high to remove the name of my creator, then fuck you and welcome to where ever the fcuk we are!",
	});
}

export { HelloWorld };
