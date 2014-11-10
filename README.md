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

if (enable.generator) {
  console.log('supports generator: `function* a() {}`');
}

if (enable.let) {
  console.log('supports `let a = 1;`');
}

if (enable.const) {
  console.log('supports `const salary = 0;`')
}

if (enable.Object.is) {
  console.log('supports `Object.is();`');
}

if (enable.Object.assign) {
  console.log('supports `Object.assign();`');
}

if (enable.Object.getOwnPropertySymbols) {
  console.log('supports `Object.getOwnPropertySymbols();`');
}

if (enable.Object.setPrototypeOf) {
  console.log('supports `Object.setPrototypeOf();`');
}

if (enable.String.raw) {
  console.log('supports `String.raw();`');
}

if (enable.String.fromCodePoint) {
  console.log('supports `String.fromCodePoint`');
}

if (enable.String.prototype.codePointAt) {
  console.log('supports `String.prototype.codePointAt`');
}

if (enable.String.prototype.normalize) {
  console.log('supports `String.prototype.normalize`');
}

if (enable.String.prototype.repeat) {
  console.log('supports `String.prototype.repeat`');
}

if (enable.String.prototype.startsWith) {
  console.log('supports `String.prototype.startsWith`');
}

if (enable.String.prototype.endsWith) {
  console.log('supports `String.prototype.endsWith`');
}

if (enable.String.prototype.contains) {
  console.log('supports `String.prototype.contains`');
}

```

## Test

```bash
$ npm install
$ npm test
```

### Coverage

```bash
$ npm test-cov
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;fengmk2@gmail.com&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
