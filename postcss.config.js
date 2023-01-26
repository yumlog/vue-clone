module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
    }),
    require('postcss-gap-properties'),
    require('postcss-nested'),
    require('cssnano'),
  ],
}
