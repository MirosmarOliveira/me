import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/me/',   // ← nome do repositório no GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    hmr: {
      overlay: true,   // mantém o overlay de erro visível
    },
  },
})