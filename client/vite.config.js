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
>>>>>>> 7f452bffb80d6496eacbac508938d62aa3973b8e
        secure: false,
      },
    },
  },

  plugins: [react()],
});
