/**!
 * enable - test/enable.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 *   hemanth <hemanth.hm@gmail.com> (http://h3manth.com)
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

  it("should detect Object.observe", function(){
    enable.Object.observe.should.be.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Object.observe.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Object.observe.should.equal(true);
    }
  });

  it("should detect Object.getOwnPropertyDescriptors", function(){
    enable.Object.getOwnPropertyDescriptors.should.be.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Object.getOwnPropertyDescriptors.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Object.getOwnPropertyDescriptors.should.equal(false);
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

  it("should detect HTML methods of String.prototype", function(){
  	[
  	  'anchor','big','bold','fixed','fontcolor','fontsize','italics', 
  	  'link', 'small', 'strike', 'sub', 'sup'
  	].forEach(function(attr){
       enable.String.prototype[attr].should.be.a.Boolean;
       enable.String.prototype[attr].should.equal(true);
  	});
  });

  it("should detect Number.isFinite", function(){
  	enable.Number.isFinite.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Number.isFinite.should.equal(true);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Number.isFinite.should.equal(true);
    }
  });

  it("should detect Number.isInteger", function(){
  	enable.Number.isInteger.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Number.isInteger.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Number.isInteger.should.equal(true);
    }
  });

  it("should detect Number.isSafeInteger", function(){
  	enable.Number.isSafeInteger.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Number.isSafeInteger.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Number.isSafeInteger.should.equal(true);
    }
  });

  it("should detect Number.isNaN", function(){
  	enable.Number.isNaN.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Number.isNaN.should.equal(true);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Number.isNaN.should.equal(true);
    }
  });

  it("should detect Number.EPSILON", function(){
  	enable.Number.EPSILON.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Number.EPSILON.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Number.EPSILON.should.equal(false);
    }
  });

  it("should detect Number.MIN_SAFE_INTEGER", function(){
  	enable.Number.MIN_SAFE_INTEGER.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Number.MIN_SAFE_INTEGER.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Number.MIN_SAFE_INTEGER.should.equal(false);
    }
  });

  it("should detect Math.clz32", function(){
  	enable.Math.clz32.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.clz32.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.clz32.should.equal(true);
    }
  });

  it("should detect Math.imul", function(){
  	enable.Math.imul.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.imul.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.imul.should.equal(true);
    }
  });

  it("should detect Math.sign", function(){
  	enable.Math.sign.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.sign.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.sign.should.equal(true);
    }
  });

  it("should detect Math.log10", function(){
  	enable.Math.log10.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.log10.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.log10.should.equal(true);
    }
  });

  it("should detect Math.log2", function(){
  	enable.Math.log2.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.log2.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.log2.should.equal(true);
    }
  });

  it("should detect Math.log1p", function(){
  	enable.Math.log1p.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.log1p.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.log1p.should.equal(true);
    }
  });

  it("should detect Math.expm1", function(){
  	enable.Math.expm1.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.expm1.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.expm1.should.equal(true);
    }
  });

  it("should detect Math.cosh", function(){
  	enable.Math.cosh.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.cosh.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.cosh.should.equal(true);
    }
  });

  it("should detect Math.sinh", function(){
  	enable.Math.sinh.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.sinh.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.sinh.should.equal(true);
    }
  });

  it("should detect Math.tanh", function(){
  	enable.Math.tanh.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.tanh.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.tanh.should.equal(true);
    }
  });

  it("should detect Math.acosh", function(){
  	enable.Math.acosh.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.acosh.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.acosh.should.equal(true);
    }
  });

  it("should detect Math.asinh", function(){
  	enable.Math.asinh.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.asinh.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.asinh.should.equal(true);
    }
  });

  it("should detect Math.atanh", function(){
  	enable.Math.atanh.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.atanh.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.atanh.should.equal(true);
    }
  });

  it("should detect Math.hypot", function(){
  	enable.Math.hypot.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.hypot.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.hypot.should.equal(true);
    }
  });

  it("should detect Math.trunc", function(){
  	enable.Math.trunc.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.trunc.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.trunc.should.equal(true);
    }
  });

  it("should detect Math.fround", function(){
  	enable.Math.fround.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.fround.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.fround.should.equal(true);
    }
  });

  it("should detect Math.cbrt", function(){
  	enable.Math.cbrt.should.be.a.Boolean;
  	if (process.version.indexOf('v0.10.') === 0) {
      enable.Math.cbrt.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Math.cbrt.should.equal(true);
    }
  });

  it("should detect Promise", function(){
  	enable.Promise.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Promise.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Promise.should.equal(true);
    }
  });

  it("should detect RegExp.prototype.match", function(){
  	enable.RegExp.prototype.match.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.RegExp.prototype.match.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.RegExp.prototype.match.should.equal(false);
    }
  });

  it("should detect RegExp.prototype.replace", function(){
  	enable.RegExp.prototype.replace.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.RegExp.prototype.replace.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.RegExp.prototype.replace.should.equal(false);
    }
  });

  it("should detect RegExp.prototype.split", function(){
  	enable.RegExp.prototype.split.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.RegExp.prototype.split.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.RegExp.prototype.split.should.equal(false);
    }
  });

  it("should detect RegExp.prototype.search", function(){
  	enable.RegExp.prototype.search.should.be.a.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.RegExp.prototype.search.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.RegExp.prototype.search.should.equal(false);
    }
  });

  it("should detect Function.prototype.toMethod", function(){
    enable.Function.prototype.toMethod.should.be.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.Function.prototype.toMethod.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.Function.prototype.toMethod.should.equal(false);
    }
  });

  it("should detect class", function(){
    enable.class.should.be.Boolean;
    if (process.version.indexOf('v0.10.') === 0) {
      enable.class.should.equal(false);
    }
    if (process.version.indexOf('v0.11.') === 0) {
      enable.class.should.equal(false);
    }
  });

});
