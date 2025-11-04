const path = require('path');

module.exports = {
	target: 'node',
	entry: './server.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2'
	},
	externals: [
		// Keep these as external dependencies for dd-trace automatic instrumentation
		'express',
		'dd-trace',
		// Exclude all dd-trace related modules to preserve automatic instrumentation
		/^dd-trace/,
		// Exclude native modules that dd-trace needs
		'@datadog/native-metrics',
		'@datadog/pprof',
		'@datadog/native-appsec',
		'@datadog/native-iast-taint-tracking',
		'@datadog/native-iast-rewriter'
	]
};
