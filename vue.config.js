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
    
    // CSS 相关选项
    css: {
      // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
      extract: true,
      // 是否开启 CSS source map？
      sourceMap: false,
      // 为预处理器的 loader 传递自定义选项。比如传递给
      // sass-loader 时，使用 `{ sass: { ... } }`。
      loaderOptions: {},
      // 为所有的 CSS 及其预处理文件开启 CSS Modules。
      // 这个选项不会影响 `*.vue` 文件。
      modules: false
  },

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
    css: {
      loaderOptions: {
        sass: {
          additionalData: "@import '@/assets/styles/public.scss';"
        }
      }
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