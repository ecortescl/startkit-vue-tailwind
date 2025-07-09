import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VueDevTools(),
    sitemap({
      hostname: 'https://tudominio.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact'
      ],
      exclude: ['/404'],
      readable: true,
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString()
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
