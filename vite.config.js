import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/TODO_App_using-react-redux/',
  plugins: [react()],
})
