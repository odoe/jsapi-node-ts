# ArcGIS API for JavaScript in Node with TypeScript

Integrating Node with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with [native ESM in a supported Node version](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html) or by transpiling to CommonJS.

```js
// rollup.config.js
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
```

Because Node does not have a native `fetch`, you will need to load a polyfill.

```js
require("cross-fetch/polyfill");
```

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM related JavaScript.

```js
import esriConfig from "@arcgis/core/config";

esriConfig.request.useIdentity = false;
```
