import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '' );
  return {  
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.js',
    },
    define: {
      'process.env.EDAMAM_APP_ID': JSON.stringify(env.EDAMAM_APP_ID),
      'process.env.EDAMAM_APP_KEY': JSON.stringify(env.EDAMAM_APP_KEY),
      'process.env.EMAIL_USER': JSON.stringify(env.EMAIL_USER),
      'process.env.EMAIL_PASS': JSON.stringify(env.EMAIL_PASS),
    },
  }
})
