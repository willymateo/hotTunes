import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    envPrefix: "VITE_",
    server: {
      port: env.PORT || 3000,
      open: true,
    },
    preview: {
      port: env.PORT || 3000,
      open: true,
    },
  };
});
