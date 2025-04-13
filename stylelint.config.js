module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-recommended-vue', 'stylelint-prettier/recommended'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-pseudo-class-no-unknown': null, // ignore ::v-deep error
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: [/(max|min)(Width|Height)/],
      },
    ],
    'media-feature-range-notation': 'prefix',
  },
};
