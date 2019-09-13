module.exports = {
	postcss: {
		plugins: [
			require('postcss-import'),
			require('postcss-extend-rule')
		]
	},
	// chainWebpack: config => {
	// 	config.module
	// 		.rule('postcss')
	// 		.test(/\.css$/)
	// 		.use('postcss-loader')
	// 		.loader('postcss-loader')
	// 		.options({
	// 			plugins: [require('postcss-import'),
	// 				require('postcss-extend-rule')
	// 			]
	// 		})
	// 		.end()
	// }
};
