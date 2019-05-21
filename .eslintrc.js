module.exports = {
  extends: ['standard', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['gatsby-*.js'],
      env: {
        node: true,
      },
    },
  ],
}
