const ts = require("rollup-plugin-typescript2");
const {terser} = require("rollup-plugin-terser");

const ts_opts = {
   tsconfigOverride: {
      compilerOptions: {
         module: "ESNext",
         declaration: true,
      },
   },
};

module.exports = {
   input: "src/lib.ts",

   output: {
      file: "dist/lib.min.js",
      format: "cjs",

      strict: true,
      // sourcemap: true,
   },

   plugins: [
      ts(ts_opts),
      terser(),
   ],
};

