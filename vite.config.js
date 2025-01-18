import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/My-Portfolio/', // Ensure this matches your GitHub repository name
//   build: {
//     outDir: 'build', // The build directory that will be used for deployment
//   },
// });