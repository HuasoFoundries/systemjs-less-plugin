!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["imagesize.js"], [], function($__System) {

$__System.registerDynamic("npm:image-size@0.4.0/lib/detector.js", ["npm:image-size@0.4.0/lib/types.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var typeMap = {};
  var types = $__require('npm:image-size@0.4.0/lib/types.js');
  types.forEach(function(type) {
    typeMap[type] = $__require('./types/' + type).detect;
  });
  module.exports = function(buffer, filepath) {
    var type,
        result;
    for (type in typeMap) {
      result = typeMap[type](buffer, filepath);
      if (result) {
        return type;
      }
    }
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = ['bmp', 'gif', 'jpg', 'png', 'psd', 'svg', 'tiff', 'webp'];
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/bmp.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isBMP(buffer) {
    return ('BM' === buffer.toString('ascii', 0, 2));
  }
  function calculate(buffer) {
    return {
      'width': buffer.readUInt32LE(18),
      'height': buffer.readUInt32LE(22)
    };
  }
  module.exports = {
    'detect': isBMP,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/gif.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var gifRegexp = /^GIF8[7,9]a/;
  function isGIF(buffer) {
    var signature = buffer.toString('ascii', 0, 6);
    return (gifRegexp.test(signature));
  }
  function calculate(buffer) {
    return {
      'width': buffer.readUInt16LE(6),
      'height': buffer.readUInt16LE(8)
    };
  }
  module.exports = {
    'detect': isGIF,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/jpg.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isJPG(buffer) {
    var SOIMarker = buffer.toString('hex', 0, 2);
    return ('ffd8' === SOIMarker);
  }
  function extractSize(buffer, i) {
    return {
      'height': buffer.readUInt16BE(i),
      'width': buffer.readUInt16BE(i + 2)
    };
  }
  function validateBuffer(buffer, i) {
    if (i > buffer.length) {
      throw new TypeError('Corrupt JPG, exceeded buffer limits');
    }
    if (buffer[i] !== 0xFF) {
      throw new TypeError('Invalid JPG, marker table corrupted');
    }
  }
  function calculate(buffer) {
    buffer = buffer.slice(4);
    var i,
        next;
    while (buffer.length) {
      i = buffer.readUInt16BE(0);
      validateBuffer(buffer, i);
      next = buffer[i + 1];
      if (next === 0xC0 || next === 0xC2) {
        return extractSize(buffer, i + 5);
      }
      buffer = buffer.slice(i + 2);
    }
    throw new TypeError('Invalid JPG, no size found');
  }
  module.exports = {
    'detect': isJPG,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/png.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var pngSignature = 'PNG\r\n\x1a\n';
  function isPNG(buffer) {
    if (pngSignature === buffer.toString('ascii', 1, 8)) {
      if ('IHDR' !== buffer.toString('ascii', 12, 16)) {
        throw new TypeError('invalid png');
      }
      return true;
    }
  }
  function calculate(buffer) {
    return {
      'width': buffer.readUInt32BE(16),
      'height': buffer.readUInt32BE(20)
    };
  }
  module.exports = {
    'detect': isPNG,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/psd.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isPSD(buffer) {
    return ('8BPS' === buffer.toString('ascii', 0, 4));
  }
  function calculate(buffer) {
    return {
      'width': buffer.readUInt32BE(18),
      'height': buffer.readUInt32BE(14)
    };
  }
  module.exports = {
    'detect': isPSD,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/svg.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var svgReg = /<svg[^>]+[^>]*>/;
  function isSVG(buffer) {
    return svgReg.test(buffer);
  }
  var extractorRegExps = {
    'root': /<svg\s[^>]+>/,
    'width': /\bwidth=(['"])([^%]+?)\1/,
    'height': /\bheight=(['"])([^%]+?)\1/,
    'viewbox': /\bviewBox=(['"])(.+?)\1/
  };
  function parseViewbox(viewbox) {
    var bounds = viewbox.split(' ');
    return {
      'width': parseInt(bounds[2], 10),
      'height': parseInt(bounds[3], 10)
    };
  }
  function parseAttributes(root) {
    var width = root.match(extractorRegExps.width);
    var height = root.match(extractorRegExps.height);
    var viewbox = root.match(extractorRegExps.viewbox);
    return {
      'width': width && parseInt(width[2], 10),
      'height': height && parseInt(height[2], 10),
      'viewbox': viewbox && parseViewbox(viewbox[2])
    };
  }
  function calculateByDimensions(attrs) {
    return {
      'width': attrs.width,
      'height': attrs.height
    };
  }
  function calculateByViewbox(attrs) {
    var ratio = attrs.viewbox.width / attrs.viewbox.height;
    if (attrs.width) {
      return {
        'width': attrs.width,
        'height': Math.floor(attrs.width / ratio)
      };
    }
    if (attrs.height) {
      return {
        'width': Math.floor(attrs.height * ratio),
        'height': attrs.height
      };
    }
    return {
      'width': attrs.viewbox.width,
      'height': attrs.viewbox.height
    };
  }
  function calculate(buffer) {
    var root = buffer.toString('utf8').match(extractorRegExps.root);
    if (root) {
      var attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs);
      }
    }
    throw new TypeError('invalid svg');
  }
  module.exports = {
    'detect': isSVG,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/readUInt.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function readUInt(buffer, bits, offset, isBigEndian) {
    offset = offset || 0;
    var endian = !!isBigEndian ? 'BE' : 'LE';
    var method = buffer['readUInt' + bits + endian];
    return method.call(buffer, offset);
  }
  module.exports = readUInt;
  return module.exports;
});

$__System.registerDynamic("github:jspm/nodelibs-buffer@0.2.0-alpha/global.js", ["@node/buffer"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('@node/buffer').Buffer;
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/tiff.js", ["@node/fs", "npm:image-size@0.4.0/lib/readUInt.js", "github:jspm/nodelibs-buffer@0.2.0-alpha/global.js"], true, function($__require, exports, module) {
  "use strict";
  var Buffer = $__require("github:jspm/nodelibs-buffer@0.2.0-alpha/global.js");
  var define,
      global = this,
      GLOBAL = this;
  var fs = $__require('@node/fs');
  var readUInt = $__require('npm:image-size@0.4.0/lib/readUInt.js');
  function isTIFF(buffer) {
    var hex4 = buffer.toString('hex', 0, 4);
    return ('49492a00' === hex4 || '4d4d002a' === hex4);
  }
  function readIFD(buffer, filepath, isBigEndian) {
    var ifdOffset = readUInt(buffer, 32, 4, isBigEndian);
    var bufferSize = 1024;
    var fileSize = fs.statSync(filepath).size;
    if (ifdOffset + bufferSize > fileSize) {
      bufferSize = fileSize - ifdOffset - 10;
    }
    var endBuffer = new Buffer(bufferSize);
    var descriptor = fs.openSync(filepath, 'r');
    fs.readSync(descriptor, endBuffer, 0, bufferSize, ifdOffset);
    var ifdBuffer = endBuffer.slice(2);
    return ifdBuffer;
  }
  function readValue(buffer, isBigEndian) {
    var low = readUInt(buffer, 16, 8, isBigEndian);
    var high = readUInt(buffer, 16, 10, isBigEndian);
    return (high << 16) + low;
  }
  function nextTag(buffer) {
    if (buffer.length > 24) {
      return buffer.slice(12);
    }
  }
  function extractTags(buffer, isBigEndian) {
    var tags = {};
    var code,
        type,
        length;
    while (buffer && buffer.length) {
      code = readUInt(buffer, 16, 0, isBigEndian);
      type = readUInt(buffer, 16, 2, isBigEndian);
      length = readUInt(buffer, 32, 4, isBigEndian);
      if (code === 0) {
        break;
      } else {
        if (length === 1 && type === 3) {
          tags[code] = readValue(buffer, isBigEndian);
        }
        buffer = nextTag(buffer);
      }
    }
    return tags;
  }
  function determineEndianness(buffer) {
    var signature = buffer.toString('ascii', 0, 2);
    if ('II' === signature) {
      return 'LE';
    } else if ('MM' === signature) {
      return 'BE';
    }
  }
  function calculate(buffer, filepath) {
    if (!filepath) {
      throw new TypeError('Tiff doesn\'t support buffer');
    }
    var isBigEndian = determineEndianness(buffer) === 'BE';
    var ifdBuffer = readIFD(buffer, filepath, isBigEndian);
    var tags = extractTags(ifdBuffer, isBigEndian);
    var width = tags[256];
    var height = tags[257];
    if (!width || !height) {
      throw new TypeError('Invalid Tiff, missing tags');
    }
    return {
      'width': width,
      'height': height
    };
  }
  module.exports = {
    'detect': isTIFF,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("npm:image-size@0.4.0/lib/types/webp.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isWebP(buffer) {
    var riffHeader = 'RIFF' === buffer.toString('ascii', 0, 4);
    var webpHeader = 'WEBP' === buffer.toString('ascii', 8, 12);
    var vp8Header = 'VP8' === buffer.toString('ascii', 12, 15);
    return (riffHeader && webpHeader && vp8Header);
  }
  function calculate(buffer) {
    var chunkHeader = buffer.toString('ascii', 12, 16);
    buffer = buffer.slice(20, 30);
    if (chunkHeader === 'VP8 ' && buffer[0] !== 0x2f) {
      return calculateLossy(buffer);
    }
    var signature = buffer.toString('hex', 3, 6);
    if (chunkHeader === 'VP8L' && signature !== '9d012a') {
      return calculateLossless(buffer);
    }
    return false;
  }
  function calculateLossless(buffer) {
    return {
      'width': 1 + (((buffer[2] & 0x3F) << 8) | buffer[1]),
      'height': 1 + (((buffer[4] & 0xF) << 10) | (buffer[3] << 2) | ((buffer[2] & 0xC0) >> 6))
    };
  }
  function calculateLossy(buffer) {
    return {
      'width': buffer.readInt16LE(6) & 0x3fff,
      'height': buffer.readInt16LE(8) & 0x3fff
    };
  }
  module.exports = {
    'detect': isWebP,
    'calculate': calculate
  };
  return module.exports;
});

$__System.registerDynamic("imagesize.js", ["@node/fs", "@node/path", "npm:image-size@0.4.0/lib/detector.js", "npm:image-size@0.4.0/lib/types.js", "npm:image-size@0.4.0/lib/types/bmp.js", "npm:image-size@0.4.0/lib/types/gif.js", "npm:image-size@0.4.0/lib/types/jpg.js", "npm:image-size@0.4.0/lib/types/png.js", "npm:image-size@0.4.0/lib/types/psd.js", "npm:image-size@0.4.0/lib/types/svg.js", "npm:image-size@0.4.0/lib/types/tiff.js", "npm:image-size@0.4.0/lib/types/webp.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var fs = $__require('@node/fs');
  var path = $__require('@node/path');
  var detector = $__require('npm:image-size@0.4.0/lib/detector.js');
  var handlers = {};
  var types = $__require('npm:image-size@0.4.0/lib/types.js');
  handlers.bmp = $__require('npm:image-size@0.4.0/lib/types/bmp.js');
  handlers.gif = $__require('npm:image-size@0.4.0/lib/types/gif.js');
  handlers.jpg = $__require('npm:image-size@0.4.0/lib/types/jpg.js');
  handlers.png = $__require('npm:image-size@0.4.0/lib/types/png.js');
  handlers.psd = $__require('npm:image-size@0.4.0/lib/types/psd.js');
  handlers.svg = $__require('npm:image-size@0.4.0/lib/types/svg.js');
  handlers.tiff = $__require('npm:image-size@0.4.0/lib/types/tiff.js');
  handlers.webp = $__require('npm:image-size@0.4.0/lib/types/webp.js');
  var MaxBufferSize = 128 * 1024;
  function lookup(buffer, filepath) {
    var type = detector(buffer, filepath);
    if (type in handlers) {
      var size = handlers[type].calculate(buffer, filepath);
      if (size !== false) {
        size.type = type;
        return size;
      }
    }
    throw new TypeError('unsupported file type');
  }
  function asyncFileToBuffer(filepath, callback) {
    fs.open(filepath, 'r', function(err, descriptor) {
      if (err) {
        return callback(err);
      }
      var size = fs.fstatSync(descriptor).size;
      var bufferSize = Math.min(size, MaxBufferSize);
      var buffer = new Buffer(bufferSize);
      fs.read(descriptor, buffer, 0, bufferSize, 0, function(err) {
        if (err) {
          return callback(err);
        }
        fs.close(descriptor, function(err) {
          callback(err, buffer);
        });
      });
    });
  }
  function syncFileToBuffer(filepath) {
    var descriptor = fs.openSync(filepath, 'r');
    var size = fs.fstatSync(descriptor).size;
    var bufferSize = Math.min(size, MaxBufferSize);
    var buffer = new Buffer(bufferSize);
    fs.readSync(descriptor, buffer, 0, bufferSize, 0);
    fs.closeSync(descriptor);
    return buffer;
  }
  module.exports = function(input, callback) {
    if (Buffer.isBuffer(input)) {
      return lookup(input);
    }
    if (typeof input !== 'string') {
      throw new TypeError('invalid invocation');
    }
    var filepath = path.resolve(input);
    if (typeof callback === 'function') {
      asyncFileToBuffer(filepath, function(err, buffer) {
        if (err) {
          return callback(err);
        }
        var dimensions;
        try {
          dimensions = lookup(buffer, filepath);
        } catch (e) {
          err = e;
        }
        callback(err, dimensions);
      });
    } else {
      var buffer = syncFileToBuffer(filepath);
      return lookup(buffer, filepath);
    }
  };
  module.exports.types = types;
  return module.exports;
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});