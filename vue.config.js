const { defineConfig } = require('@vue/cli-service')
const postcss = require('postcss')

module.exports = defineConfig({
  transpileDependencies: true,
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
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
                grid: 'autoplace',
              },
            }),
            require('postcss-import'),
            require('postcss-flexbugs-fixes'),
            require('postcss-gap-properties'),
            require('postcss-css-variables'),
            require('postcss-nested'),
          ],
        },
      },
      scss: {
        additionalData: `@import "@/assets/_variables.scss";`,
      },
    },
  },
})
