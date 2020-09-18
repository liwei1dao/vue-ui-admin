import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import LayoutBack from '@/layouts/LayoutBack'

export const constantRoutes = [
    {
        path: '/',
        hiding:true,
        component: LayoutBack,
        redirect: 'back/login',
        meta: {
          title: 'Base',
          icon: 'mdi-beer',
        },
        children: [
          {
              path: 'back/login',
              component: () => import('@/views/back/login.vue'),
              meta: {title: 'Login', icon: 'mdi-beer'},
          },
          {
              path: 'base/register',
              component: () => import('@/views/back/register.vue'),
              meta: {title: 'Register', icon: 'mdi-beer-outline'},
          }
        ]
    },
]