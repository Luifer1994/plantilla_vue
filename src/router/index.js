import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
