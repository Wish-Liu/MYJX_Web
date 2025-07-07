// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import Series from '@/pages/Series/Series.vue'
import DataPage from '@/pages/Series/DataPage.vue'
import Commodity from '@/pages/commodity/commodity.vue'
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
  {
    path: "/commodity",
    name: "Commodity",
    component: Commodity
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
