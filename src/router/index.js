import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout/Layout'
import LayoutN from '@/layout/LayoutN'

export const constantRoutes = [
    {
        path: '/',
        hiding:true,
        component: LayoutN,
        redirect: 'base/login',
        meta: {
          title: 'Base',
          icon: 'mdi-beer',
        },
        children: [
          {
              path: 'base/login',
              component: () => import('@/views/base/login.vue'),
              meta: {title: 'Login', icon: 'mdi-beer'},
          },
          {
              path: 'base/register',
              component: () => import('@/views/base/register.vue'),
              meta: {title: 'Register', icon: 'mdi-beer-outline'},
          }
        ]
    },
    {
        path: '/dashboard',
        default:true,
        component: Layout,
        redirect: 'dashboard/index',
        meta: {
          title: 'router.dashboard',
          icon: 'mdi-home-floor-b',
        },
        children: [
          {
              path: 'index',
              component: () => import('@/views/dashboard/index.vue'),
              meta: {title: 'Dashboard', icon: 'mdi-podium-silver'},
          }
        ]
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  
  const router = createRouter()
  
  // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
  export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
  }
  
  export default router