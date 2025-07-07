import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import legacy from '@vitejs/plugin-legacy'
// https://vite.dev/config/
export default defineConfig({
  base: '/MYJX_Web/', // ✅ 关键：必须和你的仓库名保持一致，区分大小写
  plugins: [vue(), vueDevTools(), legacy({
    targets: ['defaults', 'not IE 11'],
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

