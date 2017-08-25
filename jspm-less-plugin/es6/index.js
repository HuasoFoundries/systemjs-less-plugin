var fileManager = require("./file-manager.js");

module.exports = class Plugin {
	constructor(options) {
		this.options = options || {};
		this.options.prefix = this.options.prefix || "jspm://";
	}
	install(less, pluginManager) {
		var FileManager = fileManager.factory(less);
		pluginManager.addFileManager(new FileManager(this.options));
	}
};
