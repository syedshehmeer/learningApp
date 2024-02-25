import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "learning-app-4z4c-4ggnjyqk8-syedshehmeer.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
