import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PublicRegisterUser from '@/public/PublicRegisterUser.vue';
import PublicLoginUser from '@/public/PublicLoginUser.vue';
import SecureYield from '@/secure/SecureYield.vue';
import DashboardSecure from '@/secure/Dashboard/DashboardSecure.vue';
import Users from '@/secure/Users/Users.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Register',
    component: PublicRegisterUser
  },
  {
    path: '/Login',
    component: PublicLoginUser
  },
  {
    path: '',
    component: SecureYield,
    children:[
      {path: '', redirect:'dashboard'},
      {path: '/dashboard', component: DashboardSecure},
      {path: '/users', component: Users}
    ]

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
