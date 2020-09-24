const path = require('path')
const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'vue Lego Admin' // page title
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    //基础配置 详情看文档
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
      port: 8080,
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
        // 把key的路径代理到target位置
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [process.env.VUE_APP_BASE_API]: { //需要代理的路径   例如 '/api'
          target: `http://127.0.0.1:9567`, //代理到 目标路径
          changeOrigin: true,
          pathRewrite: { // 修改路径数据
            ['^' + process.env.VUE_APP_BASE_API]: '' // 举例 '^/api:""' 把路径中的/api字符串删除
          }
        }
      },
    },
    configureWebpack: {
        devtool: 'source-map',
        name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
    },
    chainWebpack(config) { //set svg-sprite-loader
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
      }
}