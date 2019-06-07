export default (function() {
	const {
		NODE_ENV,
		PORT,
		JWT_SECRET,
		MONGODB_URI,
		MONGO_HOST,
		IP,
		MONGO_PORT,
		CLIENT_SECRET,
		CLIENT_ID
	} = process.env;

	return {
		clientSecret: CLIENT_SECRET || null,
		clientId: CLIENT_ID || null,
		env: NODE_ENV || 'development',
		port: PORT || 3000,
		jwtSecret: JWT_SECRET || 'obvi_this_IsNotTher3alkey',
		mongoUri:
			MONGODB_URI ||
			MONGO_HOST ||
			'mongodb://' +
				(IP || 'localhost') +
				':' +
				(MONGO_PORT || '27017') +
				'/create-server-app'
	};
})();