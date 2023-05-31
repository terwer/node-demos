import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    viteStaticCopy({
      targets: [
        {
          src: "README*.md",
          dest: "./",
        },
      ],
    }),

    nodePolyfills({
      exclude: ["fs"],
      protocolImports: true,
    }),
  ],

  base: "",

  build: {
    minify: false,
  },
})
