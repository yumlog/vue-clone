const { defineConfig } = require('@vue/cli-service')
const { join } = require('path')
const path = require('path')

module.exports = defineConfig({
	transpileDependencies: true,
	runtimeCompiler: true,

	publicPath: process.env.BASE_URL,
	assetsDir: process.env.BASE_URL,

	devServer: {
		port: process.env.VUE_APP_PORT || 3000,
		hot: true,
		static: {
			directory: path.join(__dirname, ''), // background-image: url(@/assets/...") 경로 사용
		},
	},

	productionSourceMap: false,
	lintOnSave: false,

	// publ setup
	css: {
		extract: {
			// mini-css-extract-plugin
			ignoreOrder: true,
		},
		loaderOptions: {
			css: {
				modules: {
					auto: true,
					localIdentName: '[local]-[hash:base64:5]',
				},
			},
			// IE 10~
			postcss: {
				postcssOptions: {},
			},
			scss: {
				additionalData: `
        @import "@/assets/styles/_variables.scss";
        @import "@/assets/styles/_mixins.scss";
        `,
			},
		},
	},

	chainWebpack: (config) => {
		// devtool
		config.merge({
			devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'source-map',
		})

		// svg loader => svg component
		config.module.rules.delete('svg')

		// svg inline => assets/img
		config.module
			.rule('vue')
			.use('vue-svg-inline-loader')
			.loader('vue-svg-inline-loader')
			.options({
				inline: {
					keyword: 'inline',
					strict: true,
				},
				sprite: {
					keyword: 'sprite',
					strict: true,
				},
			})

		// 번들 최적화
		config.optimization.merge({
			splitChunks: {
				cacheGroups: {
					chunks: 'all',
				},
			},
		})
	},

	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.svg$/,
					use: ['babel-loader', 'vue-svg-loader'], // component Svg
				},
			],
		},
	},
})
