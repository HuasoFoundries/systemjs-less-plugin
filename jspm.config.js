SystemJS.config({
  transpiler: false,
  packages: {

    "node_modules/graceful-fs": {
      "main": "graceful-fs.js"
    },
    "node_modules/mime": {
      "main": "./mime.js"


    },
    "node_modules/source-map": {
      "main": "./source-map.js"
    },
    "node_modules/image-size": {
      "main": "./lib/index.js",


    },
    "node_modules/less": {
      "main": "./index.js",

      "map": {

        "./lib/less-browser.js": "./lib/less-browser/index.js",
        "./lib/less-node.js": "./lib/less-node/index.js",
        "./lib/less-rhino.js": "./lib/less-rhino/index.js",
        "./lib/less.js": "./lib/less/index.js",
        "./lib/less/data.js": "./lib/less/data/index.js",
        "./lib/less/functions.js": "./lib/less/functions/index.js",
        "./lib/less/tree.js": "./lib/less/tree/index.js",
        "./lib/less/visitors.js": "./lib/less/visitors/index.js"
      }
    }
  },
  "meta": {

    "*.json": {
      "format": "json"
    }
  },
  map: {
    "constants": "node_utils/constants.js",
    "stream": "node_utils/stream.js",
    "assert": "node_utils/assert.js",
    "util": "node_utils/util.js",
    "process": "node_utils/process.js",
    "path": "node_utils/path.js",
    "fs": "node_utils/fs.js",
    "url": "node_utils/url.js",
    "promise": "node_utils/promise.js",
    "request": "node_utils/request.js",

    "less": "src/less.js",
    "jsbn": "npm:jsbn@0.1.0",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json",
    "node_modules:*/*.json"
  ],
  map: {
    "lessjs": "github:less/less.js@2.6.1",
    "node_modules": "node_modules",
    "mime": "node_modules/mime",
    "graceful-fs": "node_modules/graceful-fs",
    "source-map": "node_modules/source-map",
    "image-size": "node_modules/image-size"
  },
  packages: {}
});
