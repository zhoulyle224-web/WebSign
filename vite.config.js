import { resolve } from "node:path";
import { copyFile, mkdir } from "node:fs/promises";
import { defineConfig } from "vite";
import { sites } from "@openai/sites-vite-plugin";

function staticWorkerEntry() {
  return {
    name: "static-worker-entry",
    apply: "build",
    async closeBundle() {
      const serverOutput = resolve(import.meta.dirname, "dist/server");
      await mkdir(serverOutput, { recursive: true });
      await copyFile(
        resolve(import.meta.dirname, "server/worker.js"),
        resolve(serverOutput, "index.js")
      );
    }
  };
}

export default defineConfig({
  plugins: [sites(), staticWorkerEntry()],
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
