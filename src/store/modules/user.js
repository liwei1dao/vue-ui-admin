import { login, logout } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  userinfo : {
    id:102455, 
    token:"asdoiio123123asdad", 
    email:"2211068034@qq.com",
    nickname:"liwei1dao",
    headurl:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
  }
}

const mutations = {
    Set_info: (state,userinfo) => {
      state.userinfo = userinfo
    },
}

const actions = {
  login({ commit }, userInfo) {
    const { email, password, token} = userInfo
    console.log("用户信息:",email,password,token)
    return new Promise((resolve, reject) => {
      login({ email: email, password: password, token: token }).then(response => {
        const {code,data } = response
        if (code == 0){
          const { id,token,email,nickname,headurl} = data
          commit('Set_info',{ id:id, token:token, email:email,nickname:nickname,headurl:headurl} )
          setToken(token)
          resolve(response)
        }else{
          reject(response)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit, state}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('Set_info',null)
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('Set_info', null)
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}