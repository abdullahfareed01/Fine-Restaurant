import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,   // ✅ generates source maps so stack trace points to your files
    minify: false,     // ✅ optional: disables minification for readable errors
  },
});
