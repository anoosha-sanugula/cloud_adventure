import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from 'process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": env,
  },
  test: {
    environment: 'jsdom',
  }
} as UserConfig)
