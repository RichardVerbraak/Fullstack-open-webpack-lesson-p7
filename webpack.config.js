const path = require('path')

// __dirname is a global variable from Node that has the current directory name
// babel-polyfill is needed so async/await can be used on all browsers
// polyfill means replicating the use of an API in browsers that do not support it

//////// LOADERS
// Webpack can only deal with plain JS and not JSX
// A "loader" like Babel is needed so JSX gets processed before being bundled by webpack
// Loaders are defined in the module property and it's rules array
// To define a loader it consists out of 3 parts
// 1. Test specifies the loaders is for .js files
// 2. Loader prop specifies the loader which will be used
// 3. Options is used to configure the loaders functionality
////////

const config = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react'],
				},
			},
		],
	},
}

module.exports = config
