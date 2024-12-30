import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sungchian-wen/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      path: "path-browserify",
    },
    extensions: [".vue", ".js"],
  },
  // 您的 vite.config.js 基本設置已經很好了，但 publicPath 是 webpack 的配置項，在 Vite 中不需要，我們可以移除它：
  // publicPath: '/VueCV/',
})
