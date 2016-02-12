/* */
function escape(source) {
	return source
		.replace(/(["\\])/g, '\\$1')
		.replace(/[\f]/g, "\\f")
		.replace(/[\b]/g, "\\b")
		.replace(/[\n]/g, "\\n")
		.replace(/[\t]/g, "\\t")
		.replace(/[\r]/g, "\\r")
		.replace(/[\u2028]/g, "\\u2028")
		.replace(/[\u2029]/g, "\\u2029");
}

var cssInject = [
	"(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style')",
	"s.type='text/css'",
	"d.getElementsByTagName('head')[0][a](s)",
	"s[i]?s[i].cssText=c:s[a](d.createTextNode(c))",
	"})"
].join(';');

exports.bundle = function (loads, compileOpts, outputOpts) {
	var _this = this;

	var stubDefines = loads.map(function (load) {
		return "System\.register('" + load.name + "', [], false, function() {});";
	}).join('\n');

	var lessOutput = loads.map(function (load) {
		return load.source;
	}).reduce(function (sourceA, sourceB) {
		return sourceA + sourceB;
	}, '');

	if (_this._nodeRequire) {
		require = _this._nodeRequire;
		try {
			var less = _this._nodeRequire('less');
			return new Promise(function (resolve, reject) {
				less.render(lessOutput, {
						compress: false
					})
					.then(function (data) {
						var cssOutput = data.css;

						resolve([stubDefines, cssInject, '("' + escape(cssOutput) + '");'].join('\n'));
					}).catch(function (e) {
						console.trace(e);
					});
			});
		} catch (err) {
			console.trace(err);
			throw new Error('Install LESS via `npm install less --save-dev` for LESS build support');
		}

	} else {
		throw new Error('loader._nodeRequire not available');
	}
};
