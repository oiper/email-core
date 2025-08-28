import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  esbuild: {
    tsconfigRaw: require('./tsconfig.app.json'),
  },
})
