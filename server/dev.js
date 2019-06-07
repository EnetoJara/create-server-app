import mongoose from 'mongoose';
import webpack from 'webpack';
import middlewares from 'webpack-dev-middleware';
import config from '../config/config';
import Client from '../config/webpack.config';
import Server from '../config/webpack.config.server';
import app from './express';

const { log } = console;

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
	useCreateIndex: true,
	useNewUrlParser: true
});
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database ${config.mongoUri}`);
});

const compiler = webpack([Client, Server]);

const devMIddle = middlewares(compiler, {
	devServer: config.devServer,
	publicPath: Client.output.publicPath
});

const webpackHotReloader = require('webpack-hot-middleware')(
	Client,
	config.devServer
);

app.use(devMIddle);
app.use(webpackHotReloader);

app.listen(config.port, () => {
	log(`
		server running or some shit
		Server listening on http://localhost:${config.port} in ${config.env}
		`);
});
