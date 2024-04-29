import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://real-estate-web-application-owuv.onrender.com',
        secure: true,
      },
    },
  },

  plugins: [react()],
});
