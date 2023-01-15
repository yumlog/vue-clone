const { defineConfig } = require('@vue/cli-service');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  devServer: {
    port: process.env.VUE_APP_PORT || 3000,
    hot: true,
  },

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
        postcssOptions: {
          plugins: [
            'postcss-import',
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                  grid: 'autoplace',
                },
                features: {
                  'custom-properties': false,
                },
              },
            ],
            'postcss-gap-properties',
            [
              'postcss-css-variables',
              { preserve: false, preserveAtRulesOrder: true },
            ],
            'postcss-nested',
            'cssnano'
          ],
        },
      },
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`,
      },
    },
  },

  chainWebpack: (config) => {
    config.module.rules.delete('svg');
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    },
  },
});
