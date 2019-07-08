const eslintConfig = require('./eslintrc.json');

eslintConfig.rules = {

  ...eslintConfig.rules,
  'jsdoc/no-types': [
    'error',
  ],

};

module.exports = eslintConfig;
