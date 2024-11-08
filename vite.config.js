import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set alias for the components folder
      '@components': '/src/components',
      '@assets': '/src/assets', // If you want to alias assets too
    },
  },
})
