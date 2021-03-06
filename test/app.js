'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-appmobi:app', function () {
  this.timeout(10000); // allow 10 seconds to execute


  describe('prompts by user', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({'skip-sdk': true})
        .withPrompts({
          APP_NAME: 'a',
          PROJECT_ID: 'v',
          CONFIG_URL: 'c'
        })
        .on('end', done);
    });

    it('runs', function () {
      assert(true);
    });
  });

  describe('prompts via options', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({
          'skip-sdk': true,
          props: {
            APP_NAME: 'a',
            PROJECT_ID: 'v',
            CONFIG_URL: 'c'
          }
        })
        .on('end', done);
    });

    it('runs', function () {
      assert(true);
    });
  });

});
