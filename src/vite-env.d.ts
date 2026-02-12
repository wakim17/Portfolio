/// <reference types="vite/client" />
export default defineConfig({
  base: './', // This ensures paths work correctly on GitHub Pages
  plugins: [react()],
})