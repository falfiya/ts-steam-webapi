const ts = require("rollup-plugin-typescript2");
const {terser} = require("rollup-plugin-terser");

const lib_min_js_ts_opts = {
   tsconfigOverride: {
      compilerOptions: {
         module: "ESNext",
      },
   },
};

const lib_min_js_config = {
   input: "src/lib.ts",

   output: {
      file: "dist/lib.min.js",
      format: "cjs",

      strict: true,
      // sourcemap: true,
   },

   plugins: [
      ts(lib_min_js_ts_opts),
      terser(),
   ],
};

const lib_d_ts_opts = {
   tsconfigOverride: {
      compilerOptions: {
         module: "ESNext",
         emitDeclarationOnly: true,
         declaration: true,
      },
   },
};

const lib_d_ts_config = {
   input: "src/lib.ts",

   output: {dir: "dist"},

   plugins: [ts(lib_d_ts_opts)],
};

module.exports = [lib_min_js_config, lib_d_ts_config];


