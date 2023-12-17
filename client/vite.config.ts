import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [react()],
    // define: {
    //   VITE_VERCEL_ENV: process.env.VITE_VERCEL_ENV,
    // },
    preview: {
      host: true,
      strictPort: true,
      port: parseInt(process.env.VITE_PORT),
    },
    server: {
      host: true,
      strictPort: true,
      port: parseInt(process.env.VITE_PORT),
    },
  }
})
