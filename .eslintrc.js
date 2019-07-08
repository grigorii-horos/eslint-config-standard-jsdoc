// @ts-nocheck
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "airbnb-base"
  ],
  plugins: [
    "json"
  ],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
 
  }
};
