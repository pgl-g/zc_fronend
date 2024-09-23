import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/login/index.vue';
import menu from '@/views/menu/inedx.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/login',
      redirect: '/login',
    },
    {
      path: '/',
      name: '/login',
      component: LoginView
    }, {
      name: 'menu',
      path: '/menu',
      component: menu
    }
  ]
})

export default router
