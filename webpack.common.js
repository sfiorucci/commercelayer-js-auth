const path = require('path')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	context: path.resolve(__dirname),
	entry: path.resolve(__dirname, 'main.ts'),
	output: {
		filename: 'main.js',
		publicPath: 'dist'
	},
	devServer: {
		// contentBase: path.join(__dirname, 'dist'),
		compress: true,
		// publicPath: '/',
		hot: true,
		overlay: true,
		https: true
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		modules: ['node_modules', path.join(__dirname, 'src')],
		extensions: ['.ts', '.js']
	}
}
