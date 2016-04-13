if (typeof window !== 'undefined') {

  // Failing to set this will hide the DOM body
  // See also http://stackoverflow.com/questions/35702313/whats-adding-style-type-text-cssbody-display-none-important-style
  window.less = {
    async: true
  };

  var head = document.getElementsByTagName('head')[0];

  // get all injected style tags in the page
  var styles = document.getElementsByTagName('style');
  var styleIds = [];
  for (var i = 0; i < styles.length; i++) {
    if (!styles[i].hasAttribute("data-href")) {
      continue;
    }
    styleIds.push(styles[i].getAttribute("data-href"));
  }

  var loadStyle = function (url, less_browser) {

    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = function () {
        if (request.responseText) { //request.status >= 200 && request.status < 400) {
          // Success!
          var responseData = request.responseText;

          //render it using less
          less_browser.render(responseData, {
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
          reject();
        }
      };

      request.onerror = function (e) {
        reject(e);
      };

      request.send();
    });
  };

  exports.fetch = function (load) {
    // don't reload styles loaded in the head
    for (var j = 0; i < styleIds.length; j++) {
      if (load.address === styleIds[j]) {
        return '';
      }
    }
    //var less_browser = require('less.js');
    return this.import('lessjs/dist/less.js', {
      name: module.id
    }).then(function (less_browser) {
      return loadStyle(load.address, less_browser);
    });

  };
} else {

  var getBuilder = function (loader) {
    return loader.import('./less-builder.js', {
      name: module.id
    });
  };


  // setting format = 'defined' means we're managing our own output
  exports.translate = function (load) {
    load.metadata.format = 'defined';
  };

  exports.bundle = function (loads, opts) {
    var _this = this;
    if (_this.buildCSS === false) {
      return '';
    }
    return getBuilder(_this)
      .then(function (builder) {
        return builder.bundle.call(_this, loads, opts);
      });
  };
}
