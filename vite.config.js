import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const viteEnv = {};
for (const key of Object.keys(process.env)) {
  if (key.startsWith('VITE_')) {
    viteEnv[`import.meta.env.${key}`] = JSON.stringify(process.env[key]);
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: viteEnv,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  }
})

