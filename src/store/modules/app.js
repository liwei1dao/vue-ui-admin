import Cookies from 'js-cookie'

const state = {
    currlanguage:Cookies.get('language')||'zh',
 }
 
 const mutations = {
  Set_currlanguage: (state,lang) => {
    state.currlanguage = lang
  },
 }
 
 const actions = {
  setcurrlanguage({ commit }, lang) {
    commit('Set_currlanguage',lang)
  }
 }
 
 export default {
   namespaced: true,
   state,
   mutations,
   actions
 }