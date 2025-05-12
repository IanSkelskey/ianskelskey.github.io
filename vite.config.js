import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { copy } from "vite-plugin-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "src/data/**/*", dest: "dist/data" }, // Copy JSON files to the dist directory
      ],
      hook: "writeBundle", // Ensure this runs after the build
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
});
