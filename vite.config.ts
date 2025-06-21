import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// export default defineConfig({
//   base: '/react-payment/',
//   plugins: [
//     react({
//       babel: {
//         plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
//       },
//     }),
//   ],
//   build: {
//     lib: {
//       name: 'react-payment',
//       entry: ['src/index.tsx'],
//     },
//   },
//   server: {
//     port: 3030,
//   },
// });

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      name: 'react-payment',
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});
