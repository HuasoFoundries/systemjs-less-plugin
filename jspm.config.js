SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "less/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "lessjs": "npm:less@2.7.2",
      "assert": "npm:jspm-nodelibs-assert@0.2.0",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
      "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
      "constants": "npm:jspm-nodelibs-constants@0.2.0",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
      "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
      "dns": "npm:jspm-nodelibs-dns@0.2.0",
      "domain": "npm:jspm-nodelibs-domain@0.2.0",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "errno": "npm:errno@0.1.4",
      "events": "npm:jspm-nodelibs-events@0.2.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "graceful-fs": "npm:graceful-fs@4.1.10",
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "https": "npm:jspm-nodelibs-https@0.2.1",
      "image-size": "npm:image-size@0.5.0",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "mime": "npm:mime@1.3.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "net": "npm:jspm-nodelibs-net@0.2.0",
      "os": "npm:jspm-nodelibs-os@0.2.0",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "promise": "npm:promise@7.1.1",
      "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
      "request": "npm:request@2.78.0",
      "source-map": "npm:source-map@0.5.6",
      "stream": "npm:jspm-nodelibs-stream@0.2.0",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
      "tls": "npm:jspm-nodelibs-tls@0.2.0",
      "tty": "npm:jspm-nodelibs-tty@0.2.0",
      "tweetnacl": "npm:tweetnacl@0.14.3",
      "url": "npm:jspm-nodelibs-url@0.2.0",
      "util": "npm:jspm-nodelibs-util@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.0",
      "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
    },
    "packages": {
      "npm:errno@0.1.4": {
        "map": {
          "prr": "npm:prr@0.0.0"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.0": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "base64-js": "npm:base64-js@1.2.0",
          "ieee754": "npm:ieee754@1.1.8",
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:promise@7.1.1": {
        "map": {
          "asap": "npm:asap@2.0.5"
        }
      },
      "npm:jspm-nodelibs-url@0.2.0": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.0": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:jspm-nodelibs-domain@0.2.0": {
        "map": {
          "domain-browserify": "npm:domain-browser@1.1.7"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "querystring": "npm:querystring@0.2.0",
          "punycode": "npm:punycode@1.3.2"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.2.6"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.0": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "randombytes": "npm:randombytes@2.0.3",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "browserify-sign": "npm:browserify-sign@4.0.4",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "miller-rabin": "npm:miller-rabin@4.0.0"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.1.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "sha.js": "npm:sha.js@2.4.8",
          "cipher-base": "npm:cipher-base@1.0.3",
          "ripemd160": "npm:ripemd160@1.0.1"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "cipher-base": "npm:cipher-base@1.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.4.0"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:sha.js@2.4.8": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.0": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "npm:jspm-nodelibs-os@0.2.0": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:request@2.78.0": {
        "map": {
          "caseless": "npm:caseless@0.11.0",
          "aws4": "npm:aws4@1.6.0",
          "har-validator": "npm:har-validator@2.0.6",
          "http-signature": "npm:http-signature@1.1.1",
          "form-data": "npm:form-data@2.1.2",
          "extend": "npm:extend@3.0.0",
          "combined-stream": "npm:combined-stream@1.0.5",
          "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
          "mime-types": "npm:mime-types@2.1.15",
          "aws-sign2": "npm:aws-sign2@0.6.0",
          "forever-agent": "npm:forever-agent@0.6.1",
          "node-uuid": "npm:node-uuid@1.4.8",
          "oauth-sign": "npm:oauth-sign@0.8.2",
          "stringstream": "npm:stringstream@0.0.5",
          "tough-cookie": "npm:tough-cookie@2.3.2",
          "qs": "npm:qs@6.3.2",
          "hawk": "npm:hawk@3.1.3",
          "isstream": "npm:isstream@0.1.2",
          "is-typedarray": "npm:is-typedarray@1.0.0",
          "tunnel-agent": "npm:tunnel-agent@0.4.3"
        }
      },
      "npm:form-data@2.1.2": {
        "map": {
          "combined-stream": "npm:combined-stream@1.0.5",
          "mime-types": "npm:mime-types@2.1.15",
          "asynckit": "npm:asynckit@0.4.0"
        }
      },
      "npm:har-validator@2.0.6": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "commander": "npm:commander@2.9.0",
          "is-my-json-valid": "npm:is-my-json-valid@2.16.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:http-signature@1.1.1": {
        "map": {
          "sshpk": "npm:sshpk@1.11.0",
          "assert-plus": "npm:assert-plus@0.2.0",
          "jsprim": "npm:jsprim@1.4.0"
        }
      },
      "npm:combined-stream@1.0.5": {
        "map": {
          "delayed-stream": "npm:delayed-stream@1.0.0"
        }
      },
      "npm:tough-cookie@2.3.2": {
        "map": {
          "punycode": "npm:punycode@1.4.1"
        }
      },
      "npm:hawk@3.1.3": {
        "map": {
          "hoek": "npm:hoek@2.16.3",
          "boom": "npm:boom@2.10.1",
          "sntp": "npm:sntp@1.0.9",
          "cryptiles": "npm:cryptiles@2.0.5"
        }
      },
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.7.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:commander@2.9.0": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:pinkie-promise@2.0.1": {
        "map": {
          "pinkie": "npm:pinkie@2.0.4"
        }
      },
      "npm:boom@2.10.1": {
        "map": {
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:sntp@1.0.9": {
        "map": {
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:cryptiles@2.0.5": {
        "map": {
          "boom": "npm:boom@2.10.1"
        }
      },
      "npm:getpass@0.1.6": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:ecc-jsbn@0.1.1": {
        "map": {
          "jsbn": "npm:jsbn@0.1.0"
        }
      },
      "npm:jodid25519@1.0.2": {
        "map": {
          "jsbn": "npm:jsbn@0.1.0"
        }
      },
      "npm:bcrypt-pbkdf@1.0.0": {
        "map": {
          "tweetnacl": "npm:tweetnacl@0.14.3"
        }
      },
      "npm:verror@1.3.6": {
        "map": {
          "extsprintf": "npm:extsprintf@1.0.2"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:jspm-nodelibs-zlib@0.2.0": {
        "map": {
          "zlib-browserify": "npm:browserify-zlib@0.1.4"
        }
      },
      "npm:generate-object-property@1.2.0": {
        "map": {
          "is-property": "npm:is-property@1.0.2"
        }
      },
      "npm:browserify-zlib@0.1.4": {
        "map": {
          "readable-stream": "npm:readable-stream@2.2.6",
          "pako": "npm:pako@0.2.9"
        }
      },
      "npm:dashdash@1.14.1": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:asn1.js@4.9.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:sshpk@1.11.0": {
        "map": {
          "getpass": "npm:getpass@0.1.6",
          "asn1": "npm:asn1@0.2.3",
          "dashdash": "npm:dashdash@1.14.1",
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:mime-types@2.1.15": {
        "map": {
          "mime-db": "npm:mime-db@1.27.0"
        }
      },
      "npm:jsprim@1.4.0": {
        "map": {
          "verror": "npm:verror@1.3.6",
          "json-schema": "npm:json-schema@0.2.3",
          "assert-plus": "npm:assert-plus@1.0.0",
          "extsprintf": "npm:extsprintf@1.0.2"
        }
      },
      "npm:stream-http@2.7.0": {
        "map": {
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
          "xtend": "npm:xtend@4.0.1",
          "readable-stream": "npm:readable-stream@2.2.6",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:is-my-json-valid@2.16.0": {
        "map": {
          "xtend": "npm:xtend@4.0.1",
          "jsonpointer": "npm:jsonpointer@4.0.1",
          "generate-function": "npm:generate-function@2.0.0",
          "generate-object-property": "npm:generate-object-property@1.2.0"
        }
      },
      "npm:browserify-sign@4.0.4": {
        "map": {
          "parse-asn1": "npm:parse-asn1@5.1.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "inherits": "npm:inherits@2.0.3",
          "create-hmac": "npm:create-hmac@1.1.4",
          "elliptic": "npm:elliptic@6.4.0",
          "create-hash": "npm:create-hash@1.1.2",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:readable-stream@2.2.6": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "string_decoder": "npm:string_decoder@0.10.31",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7"
        }
      },
      "npm:parse-asn1@5.1.0": {
        "map": {
          "asn1.js": "npm:asn1.js@4.9.1",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9"
        }
      },
      "npm:elliptic@6.4.0": {
        "map": {
          "hash.js": "npm:hash.js@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
          "hmac-drbg": "npm:hmac-drbg@1.0.0",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:hmac-drbg@1.0.0": {
        "map": {
          "hash.js": "npm:hash.js@1.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "less": {
      "main": "less.js"
    },
    "example": {
      "meta": {
        "*.less": {
          "loader": "less"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "css": "github:systemjs/plugin-css@0.1.36"
  },
  packages: {}
});