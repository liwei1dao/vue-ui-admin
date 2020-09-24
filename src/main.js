import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import store from '@/store'
import router from '@/router'
import 'flex.css'
import '@/plugins/element'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
})
