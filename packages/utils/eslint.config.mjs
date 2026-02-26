import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
];
