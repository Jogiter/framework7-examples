// eslint-disable-next-line
import svelte from 'rollup-plugin-svelte';
import path from 'path';

export default {
  plugins: [svelte()],
  root: './',
  base: '',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
}
