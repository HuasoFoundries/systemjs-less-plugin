if (typeof window !== 'undefined') {

  var less = require('npmless/browser');

  var head = document.getElementsByTagName('head')[0];

  // get all injected style tags in the page
  var styles = document.getElementsByTagName('style');
  var styleIds = [];
  for (var i = 0; i < styles.length; i++) {
    if (!styles[i].hasAttribute("data-href")) continue;
    styleIds.push(styles[i].getAttribute("data-href"));
  }

  var loadStyle = function (url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = request.responseText;

          //render it using less
          less.render(data, {
            filename: url,
            rootpath: url.replace(/[^\/]*$/, '')
          }).then(function (data) {
            //inject it into the head as a style tag
            var style = document.createElement('style');
            style.textContent = data.css;
            style.setAttribute('type', 'text/css');
            //store original type in the data-type attribute
            style.setAttribute('data-type', 'text/less');
            //store the url in the data-href attribute
            style.setAttribute('data-href', url);
            head.appendChild(style);
            resolve('');
          });

        } else {
          // We reached our target server, but it returned an error
          reject()
        }
      };

      request.onerror = function (e) {
        reject(e)
      };

      request.send();
    });
  }

  exports.fetch = function (load) {
    // don't reload styles loaded in the head
    for (var i = 0; i < styleIds.length; i++)
      if (load.address == styleIds[i])
        return '';
    return loadStyle(load.address);
  }
} else {

  function getBuilder(loader) {
    return loader['import']('./less-builder' + (System.version ? '.js' : ''), {
      name: module.id
    });
  }


  // setting format = 'defined' means we're managing our own output
  exports.translate = function (load) {
    load.metadata.format = 'defined';
  };

  exports.bundle = function (loads, opts) {
    var loader = this;
    if (loader.buildCSS === false)
      return '';
    return getBuilder(loader).then(function (builder) {
      return builder.bundle.call(loader, loads, opts);
    });
  };
}
