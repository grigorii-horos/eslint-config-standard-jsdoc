const eslintConfig = require('./eslintrc.json');

eslintConfig.rules = {

  ...eslintConfig.rules,
  'jsdoc/no-types': [
    'error',
  ],
  'jsdoc/require-param-type': [
    'off',
  ],
  'jsdoc/require-returns-type': [
    'off',
  ],
};

module.exports = eslintConfig;
