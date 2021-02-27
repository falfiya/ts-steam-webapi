const ts = require("rollup-plugin-typescript2");
const dts = require("rollup-plugin-dts").default;
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
      sourcemap: true,
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

   output: {dir: "bin"},

   plugins: [ts(lib_d_ts_opts)],
};

const lib_min_d_ts_config = {
   input: "bin/lib.d.ts",

   output: {file: "dist/lib.d.ts"},

   plugins: [dts()],
};

module.exports = [lib_min_js_config, lib_d_ts_config, lib_min_d_ts_config];


