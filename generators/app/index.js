'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var cordova = require('cordova-lib').cordova.raw; // get the promise version of all methods

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    if (this.options['no-skip-welcome-message']) { // skip as a default
      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the delightful ' + chalk.red('generator-appmobi') + ' generator!'
      ));
    }

    // props via options
    if (this.options.props) {
      this.props = this.options.props;
      done();
    } else {
    // or prompt user
      var prompts = [{
        type: 'input',
        name: 'APP_NAME',
        message: 'Enter your appmobi APP_NAME'
      }, {
        type: 'input',
        name: 'PROJECT_ID',
        message: 'Enter your appmobi PROJECT_ID'
      }, {
        type: 'input',
        name: 'CONFIG_URL',
        message: 'Enter your appmobi CONFIG_URL'
      }];
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
