# Standard JSDoc - ESLint Shareable Config
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-standard-jsdoc.svg?style=flat
[npm-url]: https://npmjs.org/package/eslint-config-standard-jsdoc
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard-jsdoc.svg?style=flat
[downloads-url]: https://npmjs.org/package/eslint-config-standard-jsdoc

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JSDoc support 


## Install

```bash
npm install eslint-config-standard-jsdoc
```
### Notice: This plugin doesn't depend on [standard style](https://github.com/standard/standard) and can be used with any other style guide, like as [Airbnb Style](https://github.com/airbnb/javascript)

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

This Shareable Config adds JSDoc to the baseline JavaScript Standard Style rules
provided in `eslint-config-standard`.

Here's how to install everything you need:

```bash
npm install eslint-config-standard-jsdoc eslint-plugin-jsdoc
```

Then, add this to your .eslintrc file, if you use vanila js or TypeScript with JSDOC :

```
{
  "extends": [ "standard-jsdoc"]
}
```
Or, if you use pure TypeScript

```
{
  "extends": [ "standard-jsdoc/ts"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT
