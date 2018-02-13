var less = require('less'),
	fs = require('fs');

var filename = `${__dirname}/../example/uploader.less`,
	filename_compare = `${__dirname}/../example/uploader_compare.css`,
	content = fs.readFileSync(filename, {
		encoding: 'utf8'
	}),
	content_compare = fs.readFileSync(filename_compare, {
		encoding: 'utf8'
	});


less.render(content, {
		sourceMap: {
			sourceMapFileInline: true
		}
	})
	.then(function (output) {
		console.log(output.css);
		console.log(output.css === content_compare);
		fs.writeFileSync(`${__dirname}/../example/uploader.css`, output.css);
		return;
	});
