'use strict';
var yeoman = require('yeoman-generator');
var cordova = require('cordova-lib').cordova.raw; // get the promise version of all methods
var prompts = require('./prompts.js');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // props via options
    if (this.options.props) {
      this.props = this.options.props;
      done();
    } else {
    // or prompt user
      this.prompt(prompts, function (props) {
        this.props = props;
        // To access props later use this.props.someOption;

        done();
      }.bind(this));
    }
  },

  writing: function () {
    if (this.options['no-cordova']) {
      return;
    }
    return cordova.plugin('add', 'https://github.com/appMobiGithub/cordova-plugin-appmobi.git', {
      save: true,
      /*eslint-disable camelcase */
      cli_variables: this.props
      /*eslint-enable camelcase */
    });
  },

  install: function () {
  }
});
