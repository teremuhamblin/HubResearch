import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: rootDir,
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        index: resolve(rootDir, "index.html"),
        lab: resolve(rootDir, "lab.html"),
        modules: resolve(rootDir, "modules.html"),
        research: resolve(rootDir, "research.html"),
        team: resolve(rootDir, "team.html"),
        contact: resolve(rootDir, "contact.html"),
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
