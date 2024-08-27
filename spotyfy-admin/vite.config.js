import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Customize the output directory here
    outDir: 'dist', // Replace with your desired output directory, e.g., './build', 'dist', or 'frontend/build'
  },
})
