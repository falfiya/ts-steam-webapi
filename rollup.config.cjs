const typescript = require("rollup-plugin-typescript2");
const {terser} = require("rollup-plugin-terser");

module.exports = {
   input: "src/lib.ts",
   output: {
      file: "dist/lib.min.js",
      format: "cjs",
      strict: true,
   },
   plugins: [typescript(), terser()],
   external: ["node-fetch"],
};
