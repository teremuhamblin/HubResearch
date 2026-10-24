import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: "index.html",
        lab: "lab.html",
        modules: "modules.html",
        research: "research.html",
        team: "team.html",
        contact: "contact.html",
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
