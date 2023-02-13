const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	transpileDependencies: true,
	// publicPath: process.env.NODE_ENV === 'production' ? '' : '',
	devServer: {
		port: process.env.VUE_APP_PORT || 3000,
		hot: true,
	},

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
		config.module.rules.delete('svg');
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
					use: ['babel-loader', 'vue-svg-loader'],
				},
			],
		},
	},
})
