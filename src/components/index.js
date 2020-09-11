import Vue from 'vue'
import Message from './Message/index.js'
import SvgIcon from './SvgIcon'

Vue.prototype.$message = Message 
Vue.component(`svg-icon`, SvgIcon)