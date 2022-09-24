import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import isElectron from 'is-electron';
import HomePage from '../views/pages/HomePage.vue';
import PlanetsPage from '../views/pages/PlanetsPage.vue';
import SymfonyPage from '../views/pages/SymfonyPage.vue';
import NestedPage from '../views/pages/NestedPage.vue';
import ControlPage from '../views/pages/ControlPage.vue';
import RouterPage from '../views/pages/RouterPage.vue';
import NestedSection1 from '../components/sections/NestedSection1.vue';
import NestedSection2 from '../components/sections/NestedSection2.vue';
import NestedSection3 from '../components/sections/NestedSection3.vue';

const router = createRouter({
  history: isElectron() ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/planets',
      name: 'planets',
      component: PlanetsPage,
    },
    {
      path: '/symfony',
      name: 'symfony',
      component: SymfonyPage,
    },
    {
      path: '/nested',
      component: NestedPage,
      children: [
        {
          path: '',
          component: NestedSection1,
        },
        {
          path: 'nested2',
          component: NestedSection2,
        },
        {
          path: 'nested3',
          component: NestedSection3,
        },
      ],
    },
    {
      path: '/control',
      name: 'control',
      component: ControlPage,
    },
    {
      path: '/router',
      name: 'router',
      component: RouterPage
    },
  ],
});

export default router;
