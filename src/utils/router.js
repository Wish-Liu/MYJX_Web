// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import Series from '@/pages/Series/Series.vue'
import DataPage from '@/pages/Series/DataPage.vue'

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/Series",
    name: "Series",
    component: Series,
    children: [
      {
        path: "",
        name: "DataPage",
        component: DataPage
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(), // 或 createWebHashHistory()
  routes
})

export default router
