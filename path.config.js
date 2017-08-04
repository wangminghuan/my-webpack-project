var path=require('path');
//定义了一些文件夹的路径
var __path={
	ENTRY: path.resolve(__dirname, 'app/index.js'),
	APP: path.resolve(__dirname, 'app/'),
	COMPONENT : path.resolve(__dirname, 'app/modules/'),
	BUILD : path.resolve(__dirname, 'build/'),
	OUTPUT_NAME:"bundle.js",
	PUBLIC:"../"//css中的url资源相对路径
}

module.exports=__path;
