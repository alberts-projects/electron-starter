import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
