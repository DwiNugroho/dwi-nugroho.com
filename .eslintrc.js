module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['@components', './src/components'],
          ['@atoms', './src/components/atoms'],
          ['@molecules', './src/components/molecules'],
          ['@organisms', './src/components/organisms'],
          ['@templates', './src/components/templates'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
