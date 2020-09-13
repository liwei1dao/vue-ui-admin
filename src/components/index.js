import Vue from 'vue'
import Message from './Message/index.js'
import SvgIcon from './SvgIcon'
import Divider from './Divider'

Vue.prototype.$message = Message 
Vue.component(`svg-icon`, SvgIcon)
Vue.component(`divider`, Divider)