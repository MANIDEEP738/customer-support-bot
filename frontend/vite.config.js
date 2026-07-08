import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Optional: proxy API calls to avoid CORS in dev
      // "/api": {
      //   target: "http://127.0.0.1:8000",
      //   changeOrigin: true,
      // },
    },
  },
});
