# Standard JSDoc - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/simonkberg/eslint-config-standard-jsdoc.svg?style=flat
[travis-url]: https://travis-ci.org/simonkberg/eslint-config-standard-jsdoc
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard-jsdoc.svg?style=flat
[npm-url]: https://npmjs.org/package/eslint-config-standard-jsdoc
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard-jsdoc.svg?style=flat
[downloads-url]: https://npmjs.org/package/eslint-config-standard-jsdoc

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JSDoc support in [JavaScript Standard Style](https://github.com/feross/standard)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Install

```bash
npm install eslint-config-standard-jsdoc
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

This Shareable Config adds JSDoc to the baseline JavaScript Standard Style rules
provided in `eslint-config-standard`.

Here's how to install everything you need:

```bash
npm install eslint-config-standard eslint-config-standard-jsdoc eslint-plugin-jsdoc
```

Then, add this to your .eslintrc file:

```
{
  "extends": ["standard", "standard-jsdoc"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT
