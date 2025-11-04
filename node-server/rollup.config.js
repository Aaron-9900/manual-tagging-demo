const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'server.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  // Need to keep these as external dependencies
  // See https://docs.datadoghq.com/tracing/trace_collection/automatic_instrumentation/dd_libraries/nodejs/#bundling
  external: [
    'express',
    'dd-trace'
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
  ]
};
