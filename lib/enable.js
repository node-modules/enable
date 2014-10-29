/**!
 * enable - lib/enable.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

try {
  require('./generator');
  exports.generator = true;
} catch (e) {
  exports.generator = false;
}

try {
  require('./let');
  exports.let = true;
} catch (e) {
  exports.let = false;
}
