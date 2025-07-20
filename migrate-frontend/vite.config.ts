import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use `import.meta.resolve` instead of `require.resolve` if you're working with ES Modules
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Polyfill for crypto module
      crypto: path.resolve(__dirname, "node_modules/crypto-browserify"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
  },
});
