const path = require('path');

module.exports = {
	devServer: {
		// host: 'localhost', //target host
		// port: 8080,
		// open: true,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://39.97.33.178'
		// 	}
		// }
		proxy: {
			'/Service': {
				target: 'https://m.mtime.cn',
				changeOrigin: true
				// pathRewrite: {
				// 	'^/api': '/'
				// }
			},
			'/api': {
				target: 'https://ticket-m.mtime.cn',
				changeOrigin: true
			}
			// secure: false,
		}
	},

	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/'),
				'@api': path.resolve(__dirname, './src/api/'),
				'@common': path.resolve(__dirname, './src/common/'),
				'@components': path.resolve(__dirname, './src/components/'),
				'@router': path.resolve(__dirname, './src/router/'),
				'@store': path.resolve(__dirname, './src/store/'),
				'@utils': path.resolve(__dirname, './src/utils/'),
				'@views': path.resolve(__dirname, './src/views/'),
				'@public': path.resolve(__dirname, './public/')
			}
		}
	}
};
