import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {getDark} from '@/utils/auth'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: (getDark() == "true") ? true : false,
    },
});
