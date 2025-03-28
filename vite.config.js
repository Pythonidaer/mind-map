import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  plugins: [
    commonjs(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['cytoscape-qtip']
  },
  css: {
    preprocessorOptions: {
      css: {
        javascriptEnabled: true
      }
    }
  }
})
