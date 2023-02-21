module.exports = {
  extends: ['@antfu', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'vue/no-setup-props-destructure': 0,
    'no-console': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        quoteProps: 'consistent',
        bracketSpacing: true,
        printWidth: 130,
      },
    ],
    'antfu/if-newline': 0,
    'antfu/generic-spacing': 0,
  },
}
