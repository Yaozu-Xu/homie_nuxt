module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:vue/essential', 'standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
}
