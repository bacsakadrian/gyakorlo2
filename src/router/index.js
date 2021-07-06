import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Egyik',
    name: 'Egy',
    component: () => import('../views/Egy.vue')
  },
  {
    path: '/Masik',
    name: 'Ketto',
    component: () => import('../views/Ketto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
