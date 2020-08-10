import Vue from 'vue';
import store from '@/store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)



const i18n = new VueI18n({
    locale: store.getters.currlanguage, // 设置语种
    messages: {
        'zh_CN': require('./lang/zh_CN'),   // 中文语言包
        'en_US': require('./lang/en_US')    // 英文语言包
    },
})
  
export default i18n