'use strict';

/**
* Helper functions.
*/

function isFunction(attr) {
  return  Object.prototype.toString.call(attr) === '[object Function]'
}

function isNumber(attr) {
  return typeof attr === 'number';
}

// generator

try {
  eval('(function* () {})()');
  exports.generator = true;
} catch (_) {
  exports.generator = false;
}

// arrow function

try {
  eval('(() => {})()');
  exports.arrowFunction = true;
} catch (_) {
  exports.arrowFunction = false;
}

// async function

try {
  eval('(async function() {})()');
  exports.asyncFunction = true;
} catch (_) {
  exports.asyncFunction = false;
}

// async arrow function

try {
  eval('(async () => {})()');
  exports.asyncArrowFunction = true;
} catch (_) {
  exports.asyncArrowFunction = false;
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
[
  'is','assign','getOwnPropertySymbols','setPrototypeOf',
  'getOwnPropertyDescriptors','observe'
].forEach(function(attr){
  obj[attr] = isFunction(Object[attr]);
});

// String methods.
var str = { prototype: {} };
['raw','fromCodePoint'].forEach(function(attr){
  str[attr] = isFunction(String[attr]);
});

// Prototype methods of Strings.
['codePointAt','normalize','repeat','startsWith','endsWith','contains','includes'].forEach(function(attr){
  str.prototype[attr] = isFunction(String.prototype[attr]);
});

// String.prototype HTML methods.
[
  'anchor','big','bold','fixed','fontcolor','fontsize','italics',
  'link', 'small', 'strike', 'sub', 'sup'
].forEach(function(attr){
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

// Function methods.
var func = {'prototype': {}};
func.prototype.toMethod = isFunction(Function.prototype.toMethod);

// class.
var klass = (function(){
  try {
    return Function("\nclass Cat {}\nreturn typeof Cat === \"function\";\n      ")();
  } catch(e){
  	return false;
  }
}());

// Map.
var map = (function(){
  if(typeof Map !== 'undefined' && isFunction(Map)){
    var map = { 'prototype': {} };
    [
      "get", "has", "set",
      "delete", "keys", "values",
      "clear", "forEach", "entries"
    ].forEach(function(attr){
      map.prototype[attr] = isFunction(Map.prototype[attr]);
    });
    map.prototype['size'] = !~~Object.getOwnPropertyDescriptor(Map.prototype,'size')
    return map;
  } else {
    return false;
  }
}());

//WeakMap.
var wm = (function(){
  if(typeof WeakMap !== 'undefined' && isFunction(WeakMap)){
    var wm = { 'prototype': {} };
    [
      "constructor", "get", "set",
      "has", "delete", "clear"
    ].forEach(function(attr){
        wm.prototype[attr] = isFunction(WeakMap.prototype[attr]);
    });
    wm.length = isNumber(WeakMap.length);
    return wm;
  } else {
    return false;
  }
}());

//Set.
var set = (function(){
  if(typeof Set !== 'undefined' && isFunction(Set)){
    var set = { 'prototype': {} };
    [
      "constructor", "add",
      "has", "delete", "clear",
      "forEach", "entries", "keys", "values"
    ].forEach(function(attr){
        set.prototype[attr] = isFunction(Set.prototype[attr]);
    });
    set.prototype['size'] = !~~Object.getOwnPropertyDescriptor(Map.prototype,'size')
    return set;
  } else {
    return false;
  }
}());

//WeakSet.
var ws = (function(){
  if(typeof WeakSet !== 'undefined' && isFunction(WeakSet)){
    var ws = { 'prototype': {} };
    [
      "constructor", "add",
      "has", "delete", "clear"
    ].forEach(function(attr){
        ws.prototype[attr] = isFunction(WeakSet.prototype[attr]);
    });
    ws.length = isNumber(WeakMap.length);
    return ws;
  } else {
    return false;
  }
}());

//Array.
var array = (function(){
  var array = { prototype : {} };
  array.from = isFunction(Array.from);
  array.of = isFunction(Array.of);
  [
    "copyWithin", "find", "findIndex",
    "fill", "keys", "values", "entries"
  ].forEach(function(attr){
    array.prototype[attr] = isFunction(Array.prototype[attr]);
  });
  return array;
}());


// Export them all
exports.Object = obj;
exports.String = str;
exports.Number = num;
exports.Math = math;
exports.RegExp = regex;
exports.Promise = typeof Promise !== 'undefined' && isFunction(Promise.all);
exports.Function = func;
exports.class = klass;
exports.Map = map;
exports.WeakMap = wm;
exports.Set = set;
exports.WeakSet = ws;
exports.Array = array;
