'use strict';

var should = require('chai').should();
var doacore = require('../');

describe('#versionGuard', function() {
  it('global._doacore should be defined', function() {
    should.equal(global._doacore, doacore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      doacore.versionGuard('version');
    }).should.throw('More than one instance of doacore');
  });
});
