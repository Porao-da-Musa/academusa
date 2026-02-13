import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.ts",

    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: [
        "src/components/**/*.{ts,tsx}",
        "src/layouts/**/*.{ts,tsx}",
        "src/pages/**/*.{ts,tsx}",
      ],

      exclude: [
        "src/tests/**",
        "**/*.test.{ts,tsx}",
        "**/*.d.ts",
        "src/main.tsx",
        "vite.config.ts",
      ],

      thresholds: {
        global: {
          lines: 75,
          branches: 75,
          functions: 75,
          statements: 75,
        },
      },
    },
  },
});
