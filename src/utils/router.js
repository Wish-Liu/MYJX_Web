// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AntSeries from '@/pages/AntSeries/AntSeries.vue'

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/AntSeries",
    name: "AntSeries",
    component: AntSeries,
  },
];

const router = createRouter({
  history: createWebHistory(), // 或 createWebHashHistory()
  routes
})

export default router
