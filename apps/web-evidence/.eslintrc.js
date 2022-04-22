module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@intlify/vue-i18n/recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  plugins: ['import'],
  parser: 'vue-eslint-parser',
  parserOptions: { ecmaVersion: 2020 },
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'padded-blocks': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'keyword-spacing': ['error', { after: true }],
    'max-len': ['error', { code: 100, ignorePattern: '^\\s*<path' }],
    'no-param-reassign': [2, { props: false }],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'no-extra-boolean-cast': 'error',
    'import/extensions': [
      'error',
      {
        ts: 'never',
        js: 'never',
        vue: 'always',
        json: 'always',
        png: 'always',
        svg: 'always',
        jpg: 'always',
        mp3: 'always',
        mp4: 'always',
      },
    ],
    indent: ['error', 2, { SwitchCase: 0 }],
    'vue/attribute-hyphenation': ['error', 'never'],
    // TODO -- figure out how to get this to work with prettier
    // 'vue/html-indent': ['error', 2, { baseIndent: 0 }],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
      },
    ],
    'vue/no-v-html': 'off',
    'vue/v-on-event-hyphenation': 'off',
    '@intlify/vue-i18n/no-missing-keys': 'off',
    '@intlify/vue-i18n/no-v-html': 'off',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        src: './src',
        extensions: ['.js', '.vue'],
      },
    ],
    '@intlify/vue-i18n/no-raw-text': [
      'error',
      {
        ignoreText: ['Test'],
      },
    ],
    'vue/multi-word-component-names': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.vue', '.json'],
      },
    },
  },
}
