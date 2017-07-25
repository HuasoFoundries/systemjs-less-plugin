var CSSPluginBase = require('css/css-plugin-base.js');
var JspmLessPlugin = require('./jspm-less-plugin.js');

var isWin = typeof process !== 'undefined' && process.platform.match(/^win/);

function fromFileURL(url) {
  return url.substr(7 + !!isWin).replace(/\//g, isWin ? '\\' : '/');
}

module.exports = new CSSPluginBase(function compile(style, address, opts) {

  var loader = this;

  // use a file path in Node and a URL in the browser
  var filename = this.builder ? fromFileURL(address) : address,
    lessPromise = this.builder ? System.import('./less.node.js', module.id) : System.import('./less.browser.js', module.id);

  return lessPromise
    .then(function (less) {
      return less.render(style, {
        filename: filename,
        rootpath: !loader.builder && filename.replace(/[^/]+$/, ''),
        paths: opts.fileAsRoot && [filename.replace(/[^/]+$/, '')],
        relativeUrls: opts.relativeUrls || false,
        sourceMap: loader.builder && {
          sourceMapBasepath: filename.replace(/[^/]+$/, '')
        },
        plugins: [new JspmLessPlugin({
          prefix: 'jspm://'
        })]
      });
    })
    .then(function (output) {
      return {
        css: output.css + (loader.builder ? '' : ('/*# sourceURL=' + filename + '*/')),
        map: output.map,

        // style plugins can optionally return a modular module
        // source as well as the stylesheet above
        moduleSource: null,
        moduleFormat: null
      };
    });
});