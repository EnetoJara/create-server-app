const path = require('path');
const nodeExternals = require('webpack-node-externals');


const { NODE_ENV } = process.env;

const entry =
	NODE_ENV === 'development'
		? './server/index-dev.js'
		: './server/index-prod.js';

module.exports = () => ({
	target: 'node',
	node: {
		__filename: false,
		__dirname: false
	},
	externals: [nodeExternals()],
	entry: entry,
	devtool: 'source-map',
	output: {
		filename: '[name]-bundle.js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		libraryTarget: 'commonjs2'
	},
	optimization: {
		splitChunks: {
			automaticNameDelimiter: '_',
			cacheGroups: {
				vendor: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: []
});
