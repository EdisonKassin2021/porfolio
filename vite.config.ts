import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: ["fsevents"],
  //     output: {
  //       plugins: [
  //         // replace({
  //         //   "process.env.VITE_GITHUB_TOKEN": JSON.stringify(
  //         //     process.env.VITE_GITHUB_TOKEN
  //         //   ),
  //         //   "process.env.VITE_GITHUB_USERNAME": JSON.stringify(
  //         //     process.env.VITE_GITHUB_USERNAME
  //         //   ),
  //         //   "process.env.VITE_ENV": JSON.stringify(process.env.VITE_ENV),
  //         // }),
  //       ],
  //       manualChunks: {
  //         "vite-deploy": ["vite"],
  //       },
  //     },
  //   },
  // },
  base: "/portfolio/",
  plugins: [react()],
});
