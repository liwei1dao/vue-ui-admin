import Vue from 'vue'
import Vuetify from 'vuetify'
import {getDark} from '@/utils/auth'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: (getDark() == "true") ? true : false,
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
});