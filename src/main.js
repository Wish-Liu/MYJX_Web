import './common/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/utils/router'

// 添加全局导航守卫
router.beforeEach((to, from, next) => {
  // console.log('路由跳转开始:', { to, from });
  next();
});

router.afterEach((to, from) => {
  // console.log('路由跳转完成:', { to, from });
});

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
