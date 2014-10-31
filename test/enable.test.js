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

  it('should detect let', function () {
    enable.let.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.let.should.equal(true);
    }
  });

  it("should detect const", function() {
    enable.const.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.const.should.equal(true);
    }
  });

  it("should detect Object.is", function() {
    enable.Object.is.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Object.is.should.equal(true);
    }
  });

  it("should detect Object.assign", function() {
    enable.Object.assign.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Object.assign.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Object.assign.should.equal(false);
    }
  });

  it("should detect Object.getOwnPropertySymbols", function() {
    enable.Object.getOwnPropertySymbols.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Object.getOwnPropertySymbols.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Object.getOwnPropertySymbols.should.equal(true);
    }
  });

  it("should detect Object.setPrototypeOf", function() {
    enable.Object.setPrototypeOf.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Object.setPrototypeOf.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Object.setPrototypeOf.should.equal(true);
    }
  });

  it("should detect String.raw", function() {
    enable.String.raw.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.raw.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.raw.should.equal(false);
    }
  });

  it("should detect String.fromCodePoint", function() {
    enable.String.fromCodePoint.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.fromCodePoint.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.fromCodePoint.should.equal(false);
    }
  });

  it("should detect String.prototype.codePointAt", function() {
    enable.String.prototype.codePointAt.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.prototype.codePointAt.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.prototype.codePointAt.should.equal(false);
    }
  });

  it("should detect String.prototype.normalize", function() {
    enable.String.prototype.normalize.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.prototype.normalize.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.prototype.normalize.should.equal(true);
    }
  });

  it("should detect String.prototype.repeat", function() {
    enable.String.prototype.repeat.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.prototype.repeat.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.prototype.repeat.should.equal(true);
    }
  });

  it("should detect String.prototype.startsWith", function() {
    enable.String.prototype.startsWith.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.prototype.startsWith.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.prototype.startsWith.should.equal(true);
    }
  });

  it("should detect String.prototype.endsWith", function() {
    enable.String.prototype.endsWith.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.prototype.endsWith.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.prototype.endsWith.should.equal(true);
    }
  });

  it("should detect String.prototype.contains", function() {
    enable.String.prototype.contains.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.String.prototype.contains.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.String.prototype.contains.should.equal(true);
    }
  });

});
