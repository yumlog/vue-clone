module.exports = {
  // *useBuiltIns 폴리필 자동감지, 끔
  // https://cli.vuejs.org/guide/browser-compatibility.html#polyfills-when-building-as-library-or-web-components
  presets: [['@babel/preset-env', { useBuiltIns: false }]],
}
