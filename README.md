enable
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/enable.svg?style=flat-square
[npm-url]: https://npmjs.org/package/enable
[travis-image]: https://img.shields.io/travis/node-modules/enable.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/enable
[coveralls-image]: https://img.shields.io/coveralls/node-modules/enable.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/node-modules/enable?branch=master
[gittip-image]: https://img.shields.io/gittip/fengmk2.svg?style=flat-square
[gittip-url]: https://www.gittip.com/fengmk2/
[david-image]: https://img.shields.io/david/node-modules/enable.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/enable
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/enable.svg?style=flat-square
[download-url]: https://npmjs.org/package/enable

Detect [es6](http://kangax.github.io/compat-table/es6) and [es7](http://kangax.github.io/compat-table/es7)
features enable or not.

## Install

```bash
$ npm install enable --save
```

## Usage

```js
var enable = require('enable');

if (enable.<feature>) {
  console.log(<feature> is supported);
}

/* Example:
if (enable.generator) {
  console.log('supports generator: `function* a() {}`');
}
*/
```

## List of features:

__Object related:__

* Object.is
* Object.assign
* Object.getOwnPropertySymbols
* Object.setPrototypeOf
* Object.observe
* Object.Object.getOwnPropertyDescriptors

__String related:__

* String.raw
* String.fromCodePoint
* String.prototype.codePointAt
* String.prototype.normalize
* String.prototype.repeat
* String.prototype.startsWith
* String.prototype.endsWith
* String.prototype.contains
* String.prototype.anchor
* String.prototype.big
* String.prototype.bold
* String.prototype.fixed
* String.prototype.fontcolor
* String.prototype.fontsize
* String.prototype.italics
* String.prototype.link
* String.prototype.small
* String.prototype.strike
* String.prototype.sub
* String.prototype.sup

__Number related:__

* Number.isFinite
* Number.isInteger
* Number.isSafeInteger
* Number.isNaN
* Number.EPSILON
* Number.MIN_SAFE_INTEGER

__Math related:__

* Math.clz32
* Math.imul
* Math.sign
* Math.log10
* Math.log2
* Math.log1p
* Math.expm1
* Math.cosh
* Math.sinh
* Math.tanh
* Math.acosh
* Math.asinh
* Math.atanh
* Math.hypot
* Math.trunc
* Math.fround
* Math.cbrt

__RefExp methods:__

* RegExp.prototype.match
* RegExp.prototype.replace
* RegExp.prototype.split
* RegExp.prototype.search

__Map related:__

* Map
* Map.prototype.size
* Map.prototype.get
* Map.prototype.has
* Map.prototype.set
* Map.prototype.delete
* Map.prototype.keys
* Map.prototype.values
* Map.prototype.clear
* Map.prototype.forEach
* Map.prototype.entries

__WeakMap related:__

* WeakMap
* WeakMap.length
* WeakMap.prototype.constructor
* WeakMap.prototype.get
* WeakMap.prototype.set
* WeakMap.prototype.has
* WeakMap.prototype.delete
* WeakMap.prototype.clear

__Set related:__

* Set
* Set.prototype.constructor
* Set.prototype.size
* Set.prototype.add
* Set.prototype.has
* Set.prototype.delete
* Set.prototype.clear
* Set.prototype.forEach
* Set.prototype.entries
* Set.prototype.keys
* Set.prototype.values

__WeakSet related:__

* WeakSet
* WeakSet.prototype.constructor
* WeakSet.prototype.add
* WeakSet.prototype.has
* WeakSet.prototype.delete
* WeakSet.prototype.clear

__Array related:__

* Array.from
* Array.of
* Array.prototype.copyWithin
* Array.prototype.find
* Array.prototype.findIndex
* Array.prototype.fill
* Array.prototype.keys
* Array.prototype.values
* Array.prototype.entries

__Others:__

* generator.
* arrowFunction
* asyncFunction
* asyncArrowFunction
* let.
* const.
* Promise.
* class.

## Test

```bash
$ npm install
$ npm test
```

### Coverage

```bash
$ npm test-cov
```
