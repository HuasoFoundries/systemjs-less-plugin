// it's bad to do this in general, as code is now heavily environment specific
var isWindows = typeof process !== 'undefined' && process.platform && process.platform.match(/^win/),
	fs = System._nodeRequire('fs'),
	path = System._nodeRequire('path');
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

var isWin = process.platform.match(/^win/);

function fromFileURL(address) {
	address = address.replace(/^file:(\/+)?/i, '');

	if (!isWin) {
		address = '/' + address;
	} else {
		address = address.replace(/\//g, '\\');
	}

	return address;
}

var cssInject = [
	"(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style')",
	"s.type='text/css'",
	"d.getElementsByTagName('head')[0][a](s)",
	"s[i]?s[i].cssText=c:s[a](d.createTextNode(c))",
	"})"
].join(';');

exports.bundle = function (loads, compileOpts, outputOpts) {
	var loader = this;
	var writeStubs = typeof outputOpts === 'undefined';
	outputOpts = outputOpts || compileOpts;

	var stubDefines = writeStubs ? loads.map(function (load) {
		return (compileOpts.systemGlobal || 'System') + ".register('" + load.name + "', [], false, function() {});";
	}).join('\n') : [];

	var rootURL = loader.rootURL || fromFileURL(loader.baseURL);

	var outFile = loader.separateCSS ? outputOpts.outFile.replace(/\.js$/, '-from-less.css') : rootURL;

	var importRegex = /@import\s+["']([^"']+)["'];/g;
	var urlRegex = /url\(["']?([^"']+)["']?\)/g;
	var lessOutput = loads.map(function (load) {
			var loadAddress = fromFileURL(load.address);
			var loadDirname = path.dirname(loadAddress);
			var relativeLoadDirname = loadDirname.replace(rootURL, "");
			return load.source
				.replace(importRegex, function (match, importUrl) {
					return match.replace(importUrl, loadDirname + "/" + importUrl);
				})
				.replace(urlRegex, function (match, url) {
					return match.replace(url, relativeLoadDirname + "/" + url);
				});
		})
		.reduce(function (sourceA, sourceB) {
			return sourceA + sourceB;
		}, '');

	try {
		var less = loader._nodeRequire(loader.normalizeSync('lessjs/lib/less-node/index').substr(isWindows ? 8 : 7));

		return less.render(lessOutput, {
				compress: false,
				sourceMap: false
			})
			.then(function (data) {
				var cssOutput = data.css;
				// write a separate CSS file if necessary
				if (loader.separateCSS) {
					if (outputOpts.sourceMaps) {
						fs.writeFileSync(outFile + '.map', data.map.toString());
						cssOutput += '/*# sourceMappingURL=' + outFile.split(/[\\/]/).pop() + '.map*/';
					}
					fs.writeFileSync(outFile, cssOutput);
					return stubDefines;
				}

				return [stubDefines, cssInject, '("' + escape(cssOutput) + '");'].join('\n');
			}).catch(function (e) {
				console.trace(e);
			});
	} catch (err) {
		console.trace(err);
		throw new Error('Install LESS via `npm install less --save-dev` for LESS build support');
	}


};
