import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PublicRegisterUser from '@/public/PublicRegisterUser.vue';
import PublicLoginUser from '@/public/PublicLoginUser.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Register',
    component: PublicRegisterUser
  },
  {
    path: '/Login',
    component: PublicLoginUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
