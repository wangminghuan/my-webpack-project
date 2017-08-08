## webpack 构建项目说明

### 1 开始
安装依赖  

	npm install

开启express服务（webpack-dev-server自带），浏览器自动跳转到http://localhost:3001

    npm run start
支持热更新(css)+自动刷新(js)
### 2 构建
运行

    npm run build

自动在build目录生成压缩后的js文件和css文件。支持压缩图片。css默认补全前缀。不需要打包的文件，如JQ，请自行在`webpack.prod.config.js`中添加

### 3 项目结构
```
.
├── app                           # 程序源文件
│   ├── common                 
│   │     │
│   │     ├── reset.css     
│   │     │
│   │     └── pxToRem.scss
│   │
│   ├── modules                   # 模块文件
│   │     │
│   │     ├──── header.js    
│   │     │
│   │     └──── header.scss        
│   │         
│   │                
│   │
│   └── index.js           	     # js入口文件
│
│
├── build                        # 构建发布后的文件目录
│   │     
│   ├── css
│   │
│   ├── img
│   │
│   └── bundle.js                # 打包后的js
│
├── view                         # 模板文件
│   │     
│   ├── pagea.html
│   │
│   └── pageb.html
│
│
├── server                       # 模拟后端接口数据
│   │
│   └── mock.json        
│
├── index.html                   # 入口模板
│
├── path.config.js               # 项目资源路径配置文件
│
├── webpack.config               # webpack配置文件
│
├── webpack.dev.config           # webpack开发配置文件
│
├── webpack.prod.config          # webpack发布配置文件
│
└── doc                          # 项目文档

```

### 4 其他说明

1. 基于`webpack-dev-server`实现的自动刷新和热更新。
2. 待继续优化~
