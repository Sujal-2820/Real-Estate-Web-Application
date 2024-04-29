import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'https://real-estate-web-application-8sb7.onrender.com',
=======
        target: 'https://real-estate-web-application-8sb7.onrender.com/',
>>>>>>> 2ff31fa6d3957591e5b41bbce10f417266f9d6de
        secure: false,
      },
    },
  },

  plugins: [react()],
});
