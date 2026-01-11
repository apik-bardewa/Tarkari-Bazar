import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This ensures all React Router routes fall back to index.html
    historyApiFallback: true,
  },
})


