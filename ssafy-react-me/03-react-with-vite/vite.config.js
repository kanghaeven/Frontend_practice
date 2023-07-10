import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [reactPlugin],
  server: {
    host: "localhost",
    port: 3000,
  },
});
