const path = require('path')

////////
// __dirname is a global variable from Node that has the current directory name
// babel-polyfill is needed so async/await can be used on all browsers
// polyfill means replicating the use of an API in browsers that do not support it

// babel-presets are used to transpile all code so it's features are compatible with other browsers (to ES5 Standard)
///////

///////////// LOADERS

/////// BABEL
// Webpack can only deal with plain JS and not JSX
// A "loader" like Babel is needed so JSX gets processed before being bundled by webpack
// Loaders are defined in the module property and it's rules array
// To define a loader it consists out of 3 parts
// 1. Test specifies the loaders is for .js files
// 2. Loader prop specifies the loader which will be used
// 3. Options is used to configure the loaders functionality

////// CSS
// css-loader is to load the CSS files
// style-loader is to generate and inject a style element that contains all the styles of the application

/////////// devServer
// The devServer will bundle the files BUT it will only exist in memory and won't be output in a file like main.js
// The changes will only be reflected on localhost port 3000

const config = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
}

module.exports = config
