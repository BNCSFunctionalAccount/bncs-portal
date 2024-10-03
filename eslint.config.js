import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import sis from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  ignores: ['.next/**', 'node_modules/**', 'next.config.mjs'],
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
  ],
  files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  plugins: {
    sis,
    eslintPrettierPlugin,
  },
  rules: {
    'no-irregular-whitespace': 'warn',
    curly: 'error',
    'eol-last': ['error', 'always'],
    'eslintPrettierPlugin/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        builtinGlobals: true,
      },
    ],
    'sis/exports': 'error',
    'sis/imports': [
      'error',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],
          // `react` first, then packages starting with a character
          ['^react(.*|$)', '^@?\\w', '^[a-z]'],
          // Packages starting with `~`
          ['^~'],
          // Imports starting with `../`
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Imports starting with `./`
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$'],
          // Type imports
          ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
        ],
      },
    ],
  },
  languageOptions: { globals: globals.browser },
});
