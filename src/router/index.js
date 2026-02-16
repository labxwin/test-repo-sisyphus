import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue'),
    },
    {
      path: '/relations/:categoryId',
      name: 'relations',
      component: () => import('../views/RelationsView.vue'),
    },
    {
      path: '/result/:categoryId/:relationId',
      name: 'result',
      component: () => import('../views/ResultView.vue'),
    },
  ],
})

export default router
