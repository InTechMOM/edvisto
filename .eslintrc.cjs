module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array. This will display prettier errors as ESLint errors.
  ],
  plugins: ['prettier'],
  rules: {
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Personal preferences
    'import/extensions': 'off',
    // Sometimes is needed in vanilla js to not clone the DOM node
    'no-param-reassign': 'warn',
  },
  globals: {
    afterAll: true,
    beforeAll: true,
    afterEach: true,
    jasmine: true,
    describe: true,
    test: true,
    jest: true,
    expect: true,
    it: true,
  },
};
