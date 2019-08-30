module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'google'
  ],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV !== "development" ? 2 : 0,
    "no-debugger": process.env.NODE_ENV !== "development" ? 2 : 0,
    'max-len': 0,
    'vue/require-prop-types': 0,
    'vue/no-v-html': 0

  },
  globals: {
  }
}
