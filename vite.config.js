import { resolve } from "node:path";
import { defineConfig } from "vite";
import { sites } from "@openai/sites-vite-plugin";

export default defineConfig({
  plugins: [sites()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        overview: resolve(import.meta.dirname, "overview.html"),
        architecture: resolve(import.meta.dirname, "architecture.html"),
        costume: resolve(import.meta.dirname, "costume.html"),
        battle: resolve(import.meta.dirname, "battle.html"),
        enemy: resolve(import.meta.dirname, "enemy.html"),
        ui: resolve(import.meta.dirname, "ui.html")
      },
      output: {
        format: "es"
      }
    }
  }
});
