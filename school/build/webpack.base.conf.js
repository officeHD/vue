var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = [path.resolve(__dirname, '../')]
const pxtorem = require('postcss-pxtorem');
var env = process.env.NODE_ENV
    // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
    // various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd
const vuxLoader = require('vux-loader')
//path 是 NodeJS工具模块，用来处理文件路径
function resolve (dir) {
    return path.join(__dirname, '..', dir)
    }
    
const webpackConfig =  {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            '@': resolve('src'),

            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'file',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: useCssSourceMap
        }),
        postcss: [
            require('autoprefixer')({
                 browsers: [
                    "last 5 versions",
                    "ie >= 8",
                    "ie_mob >= 10",
                    "ff >= 30",
                    "chrome >= 34",
                    "safari >= 6",
                    "ios >= 6",
                    "android >= 4.4",
                    '> 1%'
                ]
            }),
             pxtorem({
                rootValue: 75,
                propWhiteList: []
                 
              }),
        ]
    }
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', {
        name: 'after-less-parser',
        fn: function (source) {
          if (this.resourcePath.replace(/\\/g, '/').indexOf('vux/src/components') > -1) {
            source = source.replace(/px/g, 'PX')
          }
          // 自定义的全局样式大部分不需要转换
          if (this.resourcePath.replace(/\\/g, '/').indexOf('App.vue') > -1) {
            source = source.replace(/px/g, 'PX').replace(/-1PX/g, '-1px')
          }
          return source
        }
      },
      {
        name: 'style-parser',
        fn: function (source) {
          if (this.resourcePath.replace(/\\/g, '/').indexOf('vux/src/components') > -1) {
            source = source.replace(/px/g, 'PX')
          }
          // 避免转换1PX.less文件路径
          if (source.indexOf('1PX.less') > -1) {
            source = source.replace(/1PX.less/g, '1px.less')
          }
          return source
        }
      }],
   
  })