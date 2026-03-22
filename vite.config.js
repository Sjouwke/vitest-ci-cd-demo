import { defineConfig } from "vite";

export default defineConfig({
  base: "/vitest-ci-cd-demo", // Naam van GitHub repo
  text: {
    environment: "node",
  },
});
