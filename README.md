# Standard React - ESLint Shareable Config
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

This module is for advanced users. You probably want to use [`standard`](https://github.com/feross/standard) instead :)

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

This Shareable Config adds React and JSX to the baseline JavaScript Standard Style rules
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

### Looking for something easier than this?

The easiest way to use JavaScript Standard Style to check your code is to use the
[`standard`](https://github.com/feross/standard) package. This comes with a global
Node command line program (`standard`) that you can run or add to your `npm test` script
to quickly check your style.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```markdown
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo](https://github.com/feross/standard).

## License

MIT. Copyright (c) [Simon Kjellberg](https://simonkjellberg.com).
