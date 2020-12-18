import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: ["src/request.ts", "src/projection.ts", "src/webmap.ts"],
  output: {
    chunkFileNames: "chunks/[name].js",
    dir: "dist",
    format: "cjs"
  },
  external: ["whatwg-fetch"],
  plugins: [typescript(), resolve(), commonjs()],
  preserveEntrySignatures: false
};
