import { constantRoutes } from '@/router'

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes) {
    const res = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (!tmp.hiding) {
            res.push(tmp)
        }
    })
    return res
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function defRoutes(routes) {
    routes.forEach(route => {
        const tmp = { ...route }
        if (tmp.default) {
            return tmp
        }
    })
    return null
}



const state = {
    routes : filterAsyncRoutes(constantRoutes),
    currtagroute : defRoutes(constantRoutes),
}

const mutations = {
    SET_currtagroute: (state, route) => {
        state.currtagroute = route
    },
}

const actions = {
    setcurrtagroute({ commit },route) {
        commit('SET_currtagroute',route)
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}