const path = require('path')

// __dirname is a global variable from Node that has the current directory name
const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
}

module.exports = config
