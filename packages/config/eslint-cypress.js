module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:cypress/recommended'],
  plugins: ['cypress'],
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  rules: {
    indent: ['off'],
    'linebreak-style': ['error', 'unix'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'dot-location': ['error', 'property'],
    'handle-callback-err': 'off',
    'max-nested-callbacks': ['error', { max: 4 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'no-floating-decimal': 'error',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
    'no-trailing-spaces': ['error'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    'no-loss-of-precision': 'error',
    'no-template-curly-in-string': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-self-compare': 'error',
    'no-useless-concat': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'arrow-spacing': 'error',
    'no-useless-rename': 'error',
    'import/no-anonymous-default-export': 'off',
  },
}
