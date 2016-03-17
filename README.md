# generator-appmobi
[![NPM version](http://img.shields.io/npm/v/generator-appmobi.svg?style=flat-square)][npm-url]
[![Coverage Status](http://img.shields.io/coveralls/mwaylabs/generator-appmobi/master.svg?style=flat-square)][coveralls-url]
[![Build Status](https://img.shields.io/travis/mwaylabs/generator-appmobi/master.svg?style=flat-square)][travis-url]
[![Dependency Status](http://img.shields.io/david/mwaylabs/generator-appmobi/master.svg?style=flat-square)][daviddm-url]
[![Download Month](http://img.shields.io/npm/dm/generator-appmobi.svg?style=flat-square)][npm-url]

[npm-url]: https://npmjs.org/package/generator-appmobi
[coveralls-url]: https://coveralls.io/r/mwaylabs/generator-appmobi
[travis-url]: https://travis-ci.org/mwaylabs/generator-appmobi
[daviddm-url]: https://david-dm.org/mwaylabs/generator-appmobi
> Generator for [Appmobi](https://appmobi.com/) integration into Yeoman generators, especially [Generator-M-Ionic](https://github.com/mwaylabs/generator-m-ionic).

Guides you through the installation of the [Appmobi Cordova plugin](https://github.com/appMobiGithub/cordova-plugin-appmobi) in a user-friendly fashion.

## Use
#### Generator-M-Ionic
See how to integrate [Appmobi into Generator-M-Ionic](https://github.com/mwaylabs/generator-m-ionic/tree/master/docs/ecosystems/appmobi.md)!
#### Standalone
Can be run in any Cordova project:
```
npm install --global generator-appmobi
yo appmobi
```
#### Integrate
into your own Yeoman generator using Yeoman's awesome [Composability feature](http://yeoman.io/authoring/composability.html).

`package.json`
```js
"dependencies": {
  // ...
  "generator-appmobi": "^0.0.4",
  // ...
},
```
`index.js`
```js
this.composeWith('generator-appmobi', {}, {
  local: require.resolve('generator-appmobi/generators/app/index.js')
});
```
