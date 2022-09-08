import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import PlanetsPage from '../views/pages/PlanetsPage.vue'

const router = createRouter({
  history: import.meta.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/planets',
      name: 'planets',
      component: PlanetsPage
    }
  ]
})

export default router
