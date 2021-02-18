const typescript = require("@rollup/plugin-typescript");
const {terser} = require("rollup-plugin-terser");

module.exports = {
   input: "src/lib.ts",
   output: {
      file: "dist/lib.min.js",
      format: "cjs",
      strict: true,
      sourcemap: true,
   },
   watch: "src/lib.ts",
   plugins: [typescript(), terser()],
};
