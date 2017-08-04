var webpack = require('webpack');
var __PATH = require('./path.config.js');
var config = process.env.NODE_ENV === 'prod' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');
console.log("NODE_ENV is " + process.env.NODE_ENV);
config.module.loaders=config.module.loaders.concat([{
		test: /\.js?$/,
		include: __PATH.APP,
		exclude: /node_modules/,
		loader: 'babel-loader',
	}]);

config.output = {
	path: __PATH.BUILD,
	publicPath: __PATH.PUBLIC,
	filename: __PATH.OUTPUT_NAME
};
config.resolve = {
	extensions: ['.js'],
	alias: {
		//"react":path.resolve(__dirname, 'client/lib/react.min.js'),
	}
};
module.exports = config;
