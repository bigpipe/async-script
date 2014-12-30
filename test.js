describe('async-script', function () {
  'use strict';

  var assume = require('assume')
    , script = require('./');

  it('is exported as function', function () {
    assume(script).is.a('function');
  });
});
