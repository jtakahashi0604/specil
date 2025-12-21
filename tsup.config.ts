import { copy } from "esbuild-plugin-copy";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  esbuildPlugins: [
    copy({
      assets: {
        from: ["./src/.specil-template/**/*"],
        to: ["./.specil-template"],
      },
    }),
  ],
});
