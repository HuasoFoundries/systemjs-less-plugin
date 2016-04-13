# systemjs-less-plugin

Translates less on the browser, inlines CSS conversion during build. 

[![npm](https://img.shields.io/npm/dm/systemjs-less-plugin.svg?style=plastic)](https://www.npmjs.com/package/systemjs-less-plugin) [![Code Climate](https://codeclimate.com/github/HuasoFoundries/systemjs-less-plugin/badges/gpa.svg)](https://codeclimate.com/github/HuasoFoundries/systemjs-less-plugin) [![Travis CI](https://travis-ci.org/HuasoFoundries/systemjs-less-plugin.svg)](https://travis-ci.org/HuasoFoundries/systemjs-less-plugin)

To use this plugin, install it with jspm like so:

```sh
jspm install less=github:HuasoFoundries/systemjs-less-plugin
````

You can also install it from npm:

```sh
jspm install less=npm:systemjs-less-plugin
```

**Starting from version 1.5, instead of using `github:distros/less.js` to translate less in the browser
and `less` installed as a node module to compile in the server, *this plugin's one and only dependency* is
`github:less/less.js` for both tasks. 

What we're actually doing is use `System._nodeRequire` to treat less as if it was installed as a node module.



