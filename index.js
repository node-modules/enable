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

function isFunction(attr) {
  return typeof attr === 'function';
}

function isNumber(attr) {
  return typeof attr === 'number';
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

// Object methods.
var obj = {};
['is','assign','getOwnPropertySymbols','setPrototypeOf'].forEach(function(attr){
  obj[attr] = isFunction(Object[attr]);
});

// String methods.
var str = { prototype: {} };
['raw','fromCodePoint'].forEach(function(attr){
  str[attr] = isFunction(String[attr]);
});
['codePointAt','normalize','repeat','startsWith','endsWith','contains'].forEach(function(attr){
  str.prototype[attr] = isFunction(String.prototype[attr]);
});

// Number methods.
var num = {};
[
 'isFinite','isInteger','isSafeInteger','isNaN',
 'EPSILON','MIN_SAFE_INTEGER','MAX_SAFE_INTEGER'
].forEach(function(attr){
  num[attr] = isFunction(Number[attr]);
});

// Math methods.
var math = {}
"clz32,imul,sign,log10,log2,log1p,expm1,cosh,sinh,tanh,acosh,sinh,tanh,acosh,asinh,atanh,hypot,trunc,fround,cbrt"
.split(",")
.forEach(function(attr){
  math[attr] = isFunction(Math[attr]);
});

// RegExp methods.
var regex = {'prototype' : {} };
['match', 'replace', 'split', 'search'].forEach(function(attr){
   regex.prototype[attr] = isFunction(RegExp[attr]);
});


// Export them all
exports.Object = obj;
exports.String = str;
exports.Number = num;
exports.Math = math;
exports.RegExp = regex;
exports.Promise = typeof Promise !== 'undefined' && isFunction(Promise.all);
