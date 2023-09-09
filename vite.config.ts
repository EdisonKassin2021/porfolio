import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["fsevents"],
      output: {
        plugins: [
          replace({
            "process.env.VITE_GITHUB_TOKEN": JSON.stringify(
              process.env.VITE_GITHUB_TOKEN
            ),
            "process.env.VITE_GITHUB_USERNAME": JSON.stringify(
              process.env.VITE_GITHUB_USERNAME
            ),
          }),
        ],
        manualChunks: {
          "vite-deploy": ["vite"],
        },
      },
    },
  },
  base: "/portfolio/",
  plugins: [react()],
});
