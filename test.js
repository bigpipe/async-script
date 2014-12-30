describe('async-script', function () {
  'use strict';

  var url = 'https://code.jquery.com/jquery-latest.js'
    , assume = require('assume')
    , script = require('./');

  it('is exported as function', function () {
    assume(script).is.a('function');
  });

  it('loads the script', function (next) {
    assume(typeof jQuery).equals('undefined');

    script(document, url, function (err) {
      if (err) return next(err);

      assume(typeof jQuery).does.not.equal('undefined');
      next();
    });
  });

  it('returns a unload function when called', function (next) {
    var unload = script(document, url, function (err) {
      assume(err.message).includes('remove');
      next();
    });

    assume(unload).is.a('function');
    unload();
  });
});
