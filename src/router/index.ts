import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PublicRegisterUser from '@/public/PublicRegisterUser.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Register',
    component: PublicRegisterUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
