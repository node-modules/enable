/**!
 * enable - test/enable.test.js
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

var should = require('should');
var enable = require('../');

describe('enable.test.js', function () {
  it('should detect generator', function () {
    enable.generator.should.be.a.Boolean;
    if (process.version.indexOf('v0.11.') === 0) {
      enable.generator.should.equal(true);
    } else if (process.version.indexOf('v0.10.') === 0) {
      enable.generator.should.equal(false);
    }
  });
});
