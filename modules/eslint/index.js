module.exports = function(moduleOptions) {
  this.extendBuild((config, ctx) => {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          ...moduleOptions,
          formatter: require('eslint-formatter-friendly'),
        },
      })
    }
  })
}

module.exports.meta = require('./package.json')
