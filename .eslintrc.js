module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin: react/recommended',
    'plugin: @typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'object-curly-spacing': ['error', 'always'],
        'keyword-spacing': [
          'error',
          {
            after: true,
          },
        ],
      },
    },
  ],
};
