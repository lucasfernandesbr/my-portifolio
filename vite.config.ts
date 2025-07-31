import path from 'path'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/my-portifolio',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@types': path.resolve(__dirname, './src/types'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@Atoms': path.resolve(__dirname, './src/components/shared/Atoms'),
      '@Molecules': path.resolve(
        __dirname,
        './src/components/shared/Molecules',
      ),
      '@Organisms': path.resolve(
        __dirname,
        './src/components/shared/Organisms',
      ),
    },
  },
})
