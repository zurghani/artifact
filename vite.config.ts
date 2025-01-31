import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteMfeReact",
      filename: "remoteEntry.js",
      remotes: {
        remoteMfeReact: "http://localhost:5000/dist/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    outDir: "../dist/artifact",
    rollupOptions: {
      input: "src/Export.ts",
      output: {
        entryFileNames: "index.js",
        assetFileNames: "index.css",
      },
    },
  },
});
