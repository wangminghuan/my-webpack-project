var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//postcss-loader中autoprefixer插件
var autoprefixer = require('autoprefixer');
var __PATH = require('./path.config.js');
var config = {};

config.entry = [//利用中间件实现热更新，reload=true配置如果热更新失败，强制刷新页面
  __PATH.ENTRY];
//忽略下面模板，打包时无需打入
// config.externals={
//     'react': 'React',
//     'react-dom': 'ReactDOM'
// };
config.module = {
  loaders: [
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'url-loader?limit=2000&name=img/[name].[ext]', {
         loader: 'image-webpack-loader',
          query: {
            // 根据环境判断是否启用资源压缩
            // enabled: process.env.NODE_ENV === 'prod',
            mozjpeg: {
              progressive: true, // 创建基准jpeg文件
            },
            optipng: {
              optimizationLevel: 4, // 优化级别，0-7，值越大，压缩越多
            },
            gifsicle: {
              interlaced: false // 替换使用渐进式渲染
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ]},{
      test: /\.scss$/,
      include: __PATH.APP,
      exclude: /node_modules/,
      // loader: "style-loader!css-loader?minimize!postcss-loader!sass-loader"
      loader: ExtractTextPlugin.extract({
        //如果不需要单独提取css，注销此处配置，沿用上面配置
        fallback: "style-loader",
        use: ["css-loader?minimize", "postcss-loader", "sass-loader"]
      })
    }
  ]
};
config.plugins = [

  //允许错误不打断程序
  new webpack.NoEmitOnErrorsPlugin(),
  //提取css 不需要注销即可
  new ExtractTextPlugin("css/style.css"),
  // 压缩js
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false, // remove all comments
    },
    compress: {
      warnings: false
    }
  }),
  // 补全前缀
  new webpack.LoaderOptionsPlugin({
    options: { // pass stuff to the loader
      postcss: [autoprefixer({ //全球使用统计 >1%
          browsers: ['last 2 versions', "> 1%", 'Android >= 4.0', "iOS 8"]
        })]
    }
  })
];

module.exports = config;
