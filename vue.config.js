const path = require('path')
const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'vue Lego Admin' // page title
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    devtool: 'source-map',
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}