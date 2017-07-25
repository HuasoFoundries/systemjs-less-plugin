"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fileManager = require("./file-manager");

module.exports = function () {
  function Plugin(options) {
    _classCallCheck(this, Plugin);

    this.options = options || {};
    this.options.prefix = this.options.prefix || "jspm://";
  }

  _createClass(Plugin, [{
    key: "install",
    value: function install(less, pluginManager) {
      var FileManager = fileManager.factory(less);
      pluginManager.addFileManager(new FileManager(this.options));
    }
  }]);

  return Plugin;
}();