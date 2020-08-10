import Vue from 'vue';
import Cookies from 'js-cookie'
import VueI18n from 'vue-i18n'
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import enLocale from './lang/en' //导入该项目中用到的英文语言包
import zhLocale from './lang/zh'//导入该项目中用到的中文语言包

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...enLang
    },
    zh: {
        ...zhLocale,
        ...zhLang,
    },
}

const i18n = new VueI18n({
    locale: Cookies.get('language') || 'zh', // 设置语种
    messages, // 设置全局当地语言包,
    fallbackLocale: 'zh',
})
  
export default i18n