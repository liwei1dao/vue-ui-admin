module.exports = {
  "publicPath": "./",
  "outputDir": "dist",
  "assetsDir": "static",
  "lintOnSave": false,
  "productionSourceMap": false,
  "devServer": {
    "port": 8080,
    "open": true,
    "overlay": {
      "warnings": false,
      "errors": true
    },
    "proxy": {
      "undefined": {
        "target": "http://127.0.0.1:9567",
        "changeOrigin": true,
        "pathRewrite": {
          "^undefined": ""
        }
      }
    }
  },
  "configureWebpack": {
    "devtool": "source-map",
    "name": "Vue-Lego-Admin",
    "resolve": {
      "alias": {
        "@": "E:\\work\\vue\\vue-ui-admin\\src"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}