import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    // define: {
    //   VITE_VERCEL_ENV: process.env.VITE_VERCEL_ENV,
    // },
    preview: {
      host: true,
      strictPort: true,
      port: 8080,
    },
    server: {
      host: true,
      strictPort: true,
      port: 8080,
    },
  }
})
