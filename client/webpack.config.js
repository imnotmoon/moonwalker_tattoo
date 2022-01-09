const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: './index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				enforce: 'pre',
				use: ['babel-loader', 'ts-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		port: 3000,
		static: {
			directory: path.join(__dirname, 'public'),
		},
		hot: true,
		compress: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	devtool: 'inline-source-map',
};
