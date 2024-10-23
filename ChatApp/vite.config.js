import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      "/api":{
        target:"http://localhost:5000",
      }
    }
  }
})

// The configuration you provided in your vite.config.js file sets up a proxy for your development server to forward requests from your front-end (running on port 3000) to your back-end (running on port 5000). This proxy setting allows you to make API calls from your front-end without running into CORS (Cross-Origin Resource Sharing) 