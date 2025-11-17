import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // <-- Make expect/describe/it globally available
    environment: "jsdom", // <-- Simulate browser DOM
    setupFiles: "./src/test/setupTests.ts", // <-- Register jest-dom matchers
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
