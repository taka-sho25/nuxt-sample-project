import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // lint files
  {
    files: ['**/*.vue', '**/*.ts'],
  },

  // lint ignore files
  {
    ignores: ['api/$api.ts', 'api/$mock.ts'],
  },

  // global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Plugins, Rules,
  {
    ...eslintConfigPrettier,
    rules: {
      curly: 'error',
      'max-len': ['error', { code: 120 }],
    },
  },

  // For Vue, Nuxt
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
      'vue/no-multiple-template-root': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },

  // For typescript
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
);
