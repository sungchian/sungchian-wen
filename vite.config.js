import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/VueCV/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      path: "path-browserify",
    },
    extensions: [".vue", ".js"],
  },
  publicPath: '/VueCV/',
})
