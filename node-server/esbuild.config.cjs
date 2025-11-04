const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['server.js'],
  bundle: true,
  platform: 'node',
  target: ['node20'],
  format: 'cjs',
  outfile: 'dist/server.js',
  packages: 'external',

}).catch((e) => {
  console.error(e);
  process.exit(1);
});
