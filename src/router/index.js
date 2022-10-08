import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      isPrivate: false
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieDetailView.vue'),
      meta: {
        isPrivate: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        isPrivate: true
      }
    }
  ]
})

export default router
