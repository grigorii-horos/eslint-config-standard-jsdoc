const eslintConfig = require('./eslintrc.json');

eslintConfig.rules = {

  ...eslintConfig.rules,
  'jsdoc/no-types': [
    'error',
  ],
  'require-param-type': [
    'off',
  ],
  'require-returns-type': [
    'off',
  ],
};

module.exports = eslintConfig;
