import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
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
        "src/app/**/*.{ts,tsx}",
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
          // SETADO PARA 0 TEMPORARIAMENTE, MAS DEVE SER CONFIGURADO DE ACORDO COM AS NECESSIDADES DO PROJETO, PARA GARANTIR QUE O CÓDIGO ESTEJA SENDO TESTADO ADEQUADAMENTE.
          lines: 0,
          branches: 0,
          functions: 0,
          statements: 0,
        },
      },
    },
  },
});
