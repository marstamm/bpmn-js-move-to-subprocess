module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
    // {
    //   'require-jsdoc': "off"
    // }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'require-jsdoc': 0,
    'no-undef': 'error',
  },
};
