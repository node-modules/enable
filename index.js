/**!
 * enable - index.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 *   dead_horse <dead_horse@qq.com> (http://github.com/dead-horse)
 */

'use strict';

/**
 * Module dependencies.
 */

// generator

try {
  eval('(function* () {})()');
  exports.generator = true;
} catch (_) {
  exports.generator = false;
}

// let

try {
  eval('let a = 1;');
  exports.let = true;
} catch (_) {
  exports.let = false;
}

// const
try {
  eval('(function () { const fubar = 42; return typeof fubar === "number"; }())');
  exports.const = true;
} catch (_) {
  exports.const = false;
}

// Object.{is,assign,getOwnPropertySymbols,setPrototypeOf}
exports.Object = {
  is: typeof Object.is === 'function',
  assign: typeof Object.assign === 'function',
  getOwnPropertySymbols: typeof Object.getOwnPropertySymbols === 'function',
  setPrototypeOf: typeof Object.setPrototypeOf === 'function'
};
