'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var cordova = require('cordova-lib').cordova.raw; // get the promise version of all methods
var prompts = require('./prompts.js');

module.exports = yeoman.Base.extend({
  prompting: function () {

    // props via options
    if (this.options.props) {
      this.props = this.options.props;
    } else {
    // or prompt user
      return this.prompt(prompts)
      .then(function (props) {
        this.props = props;
        // To access props later use this.props.someOption;
      }.bind(this));
    }
  },

  writing: function () {
    if (this.options['skip-sdk']) {
      return;
    }
    return cordova.plugin('add', 'https://github.com/appMobiGithub/cordova-plugin-appmobi.git', {
      save: true,
      /*eslint-disable camelcase */
      cli_variables: this.props
      /*eslint-enable camelcase */
    })
    .then(function () {
      this.log(chalk.green('Appmobi') + ' successfully integrated');
    }.bind(this))
    .catch(function (err) {
      this.log(chalk.red('Appmobi') + ' not integrated\n' + err);
      process.exit(1);
    }.bind(this));
  },

  install: function () {
  }
});
