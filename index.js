/**!
 * enable - index.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 *   dead_horse <dead_horse@qq.com> (http://github.com/dead-horse)
 *   hemanth.hm <hemanth.hm@gmail.com> (http://h3manth.com)
 */

'use strict';

/**
* Helper functions.
*/

function isFunction( attr ) {
  return typeof attr === 'function';
}

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
  is: isFunction( Object.is ),
  assign: isFunction( Object.assign ),
  getOwnPropertySymbols: isFunction( Object.getOwnPropertySymbols ),
  setPrototypeOf: isFunction( Object.setPrototypeOf )
};

// String methods.
exports.String = {
  raw: isFunction( String.raw ),
  fromCodePoint: isFunction( String.fromCodePoint ),
  prototype:{
    codePointAt: isFunction( String.prototype.codePointAt ),
    normalize: isFunction( String.prototype.normalize ),
    repeat: isFunction( String.prototype.repeat ),
    startsWith: isFunction( String.prototype.startsWith ),
    endsWith: isFunction( String.prototype.endsWith ),
    contains: isFunction( String.prototype.contains )
  }
};
