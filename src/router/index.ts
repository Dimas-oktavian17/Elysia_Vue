import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'BooksDetailsView',
    component: () => import('@/views/HomeDetails.vue'),
    // props: (route: any) => ({ ...route.params, id: route.params.id }),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
