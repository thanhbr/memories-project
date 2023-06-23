import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
import basicSsl from '@vitejs/plugin-basic-ssl'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  // server: {
  //   host: 'localhost',
  //   port: 3000
  // }
})
