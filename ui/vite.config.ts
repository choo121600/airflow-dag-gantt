import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isLibraryBuild = command === "build";

  return {
    base: "./",
    build: isLibraryBuild
      ? {
          chunkSizeWarningLimit: 1600,
          lib: {
            entry: resolve("src", "main.tsx"),
            fileName: () => "main.js",
            formats: ["es"],
          },
          rollupOptions: {
            output: {
              inlineDynamicImports: true,
            },
          },
        }
      : { chunkSizeWarningLimit: 1600 },
    define: {
      global: "globalThis",
      "process.env": "{}",
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    plugins: [react(), cssInjectedByJsPlugin()],
    resolve: { alias: { src: "/src" } },
    server: { cors: true },
  };
});
