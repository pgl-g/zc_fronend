import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/views/login/index.vue';
import menu from '@/views/menu/index.vue';

import home from '@/views/home/index.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'menu',
      path: '/menu',
      component: menu,
      children: [{
        name: 'home',
        path: '/home',
        component: home
      },
      {
        name: 'set',
        path: '/set',
        component: () => import('@/views/set/index.vue')
      },
      {
        name: 'overview',
        path: '/overview',
        component: () => import('@/views/overview/index.vue')
      },
      ]
    }
  ]
})

export default router
