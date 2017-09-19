var path=require('path');
var argv=null;
try { 
 argv = JSON.parse(process.env.npm_config_argv).original;
}catch(ex){    
	argv = process.argv;
}

if(argv[argv.length-1]=="undefined" ||argv[argv.length-1]=="" ) {
	console.log("当前项目目录不存在，请确认参数！");
	return false;
}
var activeProject=argv[argv.length-1].replace(/^--/g,"");
console.log(activeProject);
// 通过npm run start --xxx的方式将参数传递到配置文件内部
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
