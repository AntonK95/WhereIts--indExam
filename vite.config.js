import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WhereIts--indExam/'  // Viktigt för GitHub Pages
})
