import Vue from 'vue'
import Message from './message/index.js'
import SvgIcon from './svgicon'
import Divider from './divider'

Vue.prototype.$message = Message 
Vue.component(`svgicon`, SvgIcon)
Vue.component(`divider`, Divider)