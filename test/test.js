var assert = require('assert'),
	jspm = require('jspm'),
	fs = require('fs'),
	pathexample = 'example/example.less!',
	pathbundle = 'example/example.js',
	pathbundlesfx = 'example/example_sfx.js';


describe('Bundle less file', function () {
	this.timeout(4000);
	it('Should be able to run jspm bundle to compile and bundle a less file', function (done) {
		fs.exists(pathbundle, function (exists) {
			if (exists) {
				fs.unlinkSync(pathbundle);
			}

			jspm.bundle(pathexample, pathbundle, {
				minify: false,
				sourceMaps: true
			}).then(function () {
				done();
			}).catch(function (err) {
				console.error('Bundle falla');
				console.trace(err);
				throw err;
			});
		});

	});


});


describe('Bundle SFX less file', function () {
	this.timeout(4000);
	it('Should be able to run jspm bundle to compile and bundle a less file', function (done) {
		fs.exists(pathbundlesfx, function (exists) {
			if (exists) {
				fs.unlinkSync(pathbundlesfx);
			}

			jspm.bundleSFX(pathexample, pathbundlesfx, {
				minify: false,
				sourceMaps: true,
				format: 'cjs'
			}).then(function () {
				done();
			}).catch(function (err) {
				console.error('Bundle fails');
				console.trace(err);
				throw err;
			});
		});

	});
});


describe('Compile styles correctly', function () {
	this.timeout(2000);

	var code;

	it('should compile -webkit-border-radius property correctly', function (done) {
		setTimeout(function () {
			code = code || fs.readFileSync(pathbundle);
			assert.ok(/-webkit-border-radius:\s+20px/.test(code));
			done();
		}, 100);
	});
	it('should compile -moz-border-radius property correctly', function () {
		code = code || fs.readFileSync(pathbundle);
		assert.ok(/-moz-border-radius:\s+20px/.test(code));
	});
	it('should compile border-radius property correctly', function () {
		code = code || fs.readFileSync(pathbundle);
		assert.ok(/border-radius:\s+20px/.test(code));
	});

});


describe('Compile styles correctly in bundle sfx', function () {
	this.timeout(2000);

	var code;

	it('should compile -webkit-border-radius property correctly', function (done) {
		setTimeout(function () {
			code = code || fs.readFileSync(pathbundlesfx);
			assert.ok(/-webkit-border-radius:\s+20px/.test(code));
			done();
		}, 100);
	});
	it('should compile -moz-border-radius property correctly', function () {
		code = code || fs.readFileSync(pathbundlesfx);
		assert.ok(/-moz-border-radius:\s+20px/.test(code));
	});
	it('should compile border-radius property correctly', function () {
		code = code || fs.readFileSync(pathbundlesfx);
		assert.ok(/border-radius:\s+20px/.test(code));
	});

});
