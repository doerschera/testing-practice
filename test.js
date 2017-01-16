'use strict';

var expect = require('chai').expect;
var pangram = require('./script.js');

describe('smoke tests', function() {
  it('should exist', function() {
    expect(pangram).to.exist;
  })

  it('should be a function', function() {
    expect(pangram).to.be.a('function');
  })
})

describe('input type', function() {
  it('should return false for non-strings', function() {
    expect(pangram(2)).to.equal(false);
  })
})

describe('is pangram', function() {
  it('should return true if pangram', function() {
    expect(pangram('the quick brown fox jumps over the lazy dog')).to.equal(true);
  })
})

describe('is not pangram', function() {
  it('should return false if not pangram', function() {
    expect(pangram('this is not a pangram')).to.equal(false);
  })
})

describe('special characters', function() {
  it('should remove special characters', function() {
    expect(pangram('The quick brown fox jumps over the lazy dog!')).to.equal(true);
  })
})

describe('capitailization', function() {
  it('should be case insensitive', function() {
    expect(pangram('THE quick brown FoX jumps over the LAZY dog')).to.equal(true);
  })
})
