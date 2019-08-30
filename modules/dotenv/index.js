module.exports = function(moduleOptions) {
  const { parsed } = require('dotenv-expand')(require('dotenv').config(moduleOptions))

  Object.assign(this.options.env, parsed, this.options.env || {})
}
