var path = require("path");
//it requires SystemJS as loader


function resolveURL(filename) {
  return filename.replace(/^file:\/\//, "").replace(/^\/([a-zA-Z]:)\//, "$1/").replace(/^([a-zA-Z])\//, "$1:/").replace(/\//g, path.sep);
}

exports.factory = function(less) {
  return class extends less.FileManager {
    constructor(options) {
      super();
      this.options = options;
      this.loader = System;
      this.loader.config({
        defaultJSExtensions: false
      });
    }
    supports(filename) {
      return filename.startsWith(this.options.prefix);
    }
    supportsSync(filename) {
      return this.supports(filename);
    }
    resolve(filename, currentDirectory) {
      return this.loader.normalize(filename.slice(this.options.prefix.length)).then((filename) => (
        path.relative(currentDirectory, resolveURL(filename.replace(/\.js$/, "")))
      ));
    }
    resolveSync(filename, currentDirectory) {
      filename = this.loader.normalizeSync(filename.slice(this.options.prefix.length));
      return path.relative(currentDirectory, resolveURL(filename.replace(/\.js$/, "")));
    }
    loadFile(filename, currentDirectory, ...args) {
      return this.resolve(filename, currentDirectory).then((filename) => (
        super.loadFile(filename, currentDirectory, ...args)
      ));
    }
    loadFileSync(filename, currentDirectory, ...args) {
      filename = this.resolveSync(filename, currentDirectory);
      return super.loadFileSync(filename, currentDirectory, ...args);
    }
  };
};
