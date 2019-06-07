import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes';
import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes';

export default (function() {
	const app = new express();
	app.use(compress());
	app.use(helmet());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(cors());

	app.use(indexRoutes);
	app.use('/api/auth', authRoutes);
	app.use('/api/users', userRoutes);

	app.use((err, req, res) => {
		if (err.name === 'UnauthorizedError') {
			res.status(401).json({ error: err.name + ': ' + err.message });
		}
	});
	return app;
})();
