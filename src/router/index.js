import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import LayoutBack from '@/layouts/LayoutBack'

export const constantRoutes = [
    {
        path: '/',
        hiding:true,
        component: LayoutBack,
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
]