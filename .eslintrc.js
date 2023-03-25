module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'standard-with-typescript',
    'next/core-web-vitals'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', 'unused-imports'],
  rules: {
    // '@typescript-eslint/semi': ['error'],
    'comma-dangle': ['off', 'never'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
