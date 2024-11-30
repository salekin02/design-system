import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    outDir: 'dist',
    insertTypesEntry: true,
  })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SalekinDesignSystem',
      formats: ['es', 'cjs'], // Include ES module format
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'], // Treat as peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          antd: 'antd',
        },
      },
    },
    minify: true,
    sourcemap: false,
  },
})
