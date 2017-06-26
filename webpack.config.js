var webpack=require('webpack');
var __PATH=require('./path.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var glob = require('glob');
//node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件。


var config = process.env.NODE_ENV === 'prod' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');

console.log("NODE_ENV is " + process.env.NODE_ENV);

config.module={
	loaders:[
		{
               test: /\.scss$/,
               // include: path.resolve(__dirname, './src/static/css'),
               //将入口除所有require过来的css抽离成一个文件
               loader: ExtractTextPlugin.extract({
               	fallback: "style-loader",//当css样式没有被抽取的时候可以使用该loader
            		use: ['css-loader','postcss-loader','sass-loader']//编译解析的css文件loader
            	 })
              },
       	{
	         test: /\.css$/,
	         include: __PATH.APP,
	         exclude: /node_modules/,
	         loader: "style-loader!css-loader?minimize&modules!postcss-loader"
       	},
    	{
	        test: /\.(png|jpg)$/,
	        include: __PATH.APP,
	        exclude: /node_modules/,
	        loader: 'url-loader?limit=2000'
  		},
  		{
		 	 test: /\.js[x]?$/,
		 	 include: __PATH.APP,
	         exclude: /node_modules/,
	         loader: 'babel-loader',
    	}
	]
};
config.output={
		path: __PATH.BUILD,
	    publicPath: __PATH.PUBLIC,
	    filename: __PATH.OUTPUT_NAME
	};
config.resolve = {
    extensions: ['.js'],
    alias: {
      //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
    }
  };
new ExtractTextPlugin('./style.css'),
module.exports=config;
