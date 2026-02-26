import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nfl-style-ipl/'  // Change to your repo name for GitHub Pages
})