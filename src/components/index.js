import Vue from 'vue'
import Message from './message/index.js'
import SvgIcon from './svgIcon'
import Divider from './divider'

Vue.prototype.$message = Message 
Vue.component(`divider`, Divider)