import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'framework7/css/bundle': 'framework7/framework7-bundle.css',
      'framework7/lite/bundle': 'framework7/lite-bundle',
    },
  },
})
