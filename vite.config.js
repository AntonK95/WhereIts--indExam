import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WhereIts--indExam/',  // Viktigt för GitHub Pages
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: './index.html',
  //       '404': './index.html',  // Skapa en 404.html som omdirigerar till index.html
  //     }
  //   }
  // }
})
