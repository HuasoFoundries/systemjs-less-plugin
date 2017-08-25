"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var path = require("path");
//it requires SystemJS as loader


function resolveURL(filename) {
  return filename.replace(/^file:\/\//, "").replace(/^\/([a-zA-Z]:)\//, "$1/").replace(/^([a-zA-Z])\//, "$1:/").replace(/\//g, path.sep);
}

exports.factory = function (less) {
  return function (_less$FileManager) {
    _inherits(_class, _less$FileManager);

    function _class(options) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

      _this.options = options;
      _this.loader = System;
      _this.loader.config({
        defaultJSExtensions: false
      });
      return _this;
    }

    _createClass(_class, [{
      key: "supports",
      value: function supports(filename) {
        return filename.startsWith(this.options.prefix);
      }
    }, {
      key: "supportsSync",
      value: function supportsSync(filename) {
        return this.supports(filename);
      }
    }, {
      key: "resolve",
      value: function resolve(filename, currentDirectory) {
        return this.loader.normalize(filename.slice(this.options.prefix.length)).then(function (filename) {
          return path.relative(currentDirectory, resolveURL(filename.replace(/\.js$/, "")));
        });
      }
    }, {
      key: "resolveSync",
      value: function resolveSync(filename, currentDirectory) {
        filename = this.loader.normalizeSync(filename.slice(this.options.prefix.length));
        return path.relative(currentDirectory, resolveURL(filename.replace(/\.js$/, "")));
      }
    }, {
      key: "loadFile",
      value: function loadFile(filename, currentDirectory) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _this2 = this;

        return this.resolve(filename, currentDirectory).then(function (filename) {
          var _get2;

          return (_get2 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "loadFile", _this2)).call.apply(_get2, [_this2, filename, currentDirectory].concat(args));
        });
      }
    }, {
      key: "loadFileSync",
      value: function loadFileSync(filename, currentDirectory) {
        var _get3;

        filename = this.resolveSync(filename, currentDirectory);

        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        return (_get3 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "loadFileSync", this)).call.apply(_get3, [this, filename, currentDirectory].concat(args));
      }
    }]);

    return _class;
  }(less.FileManager);
};