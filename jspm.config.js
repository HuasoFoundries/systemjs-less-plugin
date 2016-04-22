SystemJS.config({
  transpiler: false,
  packages: {
    "less": {
      "main": "less.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json"
  ],
  map: {
    "lessjs": "github:less/less.js@2.6.1"
  },
  packages: {}
});
