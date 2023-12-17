import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [react()],
    define: {
      VITE_GRAPHQL_URI: process.env.VITE_GRAPHQL_URI,
    },
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
