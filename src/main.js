import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import store from '@/store'
import router from '@/router'
import vuetify from './plugins/vuetify';
// import '@/styles/index.scss';
import '@/plugins/flex'

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
