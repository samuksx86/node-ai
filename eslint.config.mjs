// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier';
import * as importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'eslint.config.mjs',
      'dist',
      'node_modules',
      'coverage',
      'migrations',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: eslintPluginPrettierRecommended,
    },
  },
  {
    rules: {
      // NestJS: geralmente trabalha com classes e decorators
      'class-methods-use-this': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['constructors', 'methods'] },
      ],

      // Estilo e boas práticas
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'error',

      eqeqeq: ['warn', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      'no-duplicate-imports': 'error',
      'no-unreachable': 'error',
      'no-unexpected-multiline': 'error',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'no-lone-blocks': 'error',
      'no-multi-str': 'error',
      'consistent-return': 'error',
      'no-else-return': 'warn',
      'no-restricted-globals': ['error', 'event', 'fdescribe'],
      'no-throw-literal': 'error',
      'no-return-await': 'error',
      yoda: ['error', 'never'],
      'default-case': ['error'],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'SwitchStatement',
          message:
            'O uso de switch/case não é permitido. Use if/else ou um objeto de mapeamento.',
        },
      ],
      'dot-notation': 'warn',
      'no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],
      'no-new-func': ['error'],
      'prettier/prettier': 'error',
      'no-new-wrappers': ['error'],
      'no-proto': ['error'],
      'no-octal-escape': ['error'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // node modules (fs, path, etc)
            'external', // bibliotecas externas (react, axios, etc)
            'internal', // aliases internos (ex: @app)
            'parent', // ../
            'sibling', // ./
            'index', // index.ts
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      curly: ['error', 'all'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-trailing-spaces': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  {
    files: ['test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
);
