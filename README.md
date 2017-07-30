# systemjs-less-plugin

Translates less on the browser, inlines CSS conversion during build.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/755f16a1ce1e4295aeeced27f2563ad0)](https://www.codacy.com/app/amenadiel/systemjs-less-plugin?utm_source=github.com&utm_medium=referral&utm_content=HuasoFoundries/systemjs-less-plugin&utm_campaign=badger)
[![npm](https://img.shields.io/npm/dm/systemjs-less-plugin.svg?style=plastic)](https://www.npmjs.com/package/systemjs-less-plugin) [![Code Climate](https://codeclimate.com/github/HuasoFoundries/systemjs-less-plugin/badges/gpa.svg)](https://codeclimate.com/github/HuasoFoundries/systemjs-less-plugin) [![Travis CI](https://travis-ci.org/HuasoFoundries/systemjs-less-plugin.svg)](https://travis-ci.org/HuasoFoundries/systemjs-less-plugin)

This SystemJS plugin provides in-browser compilation of less stylesheets to regular CSS styles,
as well as precompilation at the build stage when bundling your project with JSPM.

It depends (of course) on [{Less}](http://lesscss.org/) but you don't need to worry about it.
We have it bundled along this loader plugin. It also depends on [plugin-css](https://github.com/systemjs/plugin-css) and,
again, you don't need to worry about that, because it'll be installed along `system-less-plugin`.


### Installing

To use this plugin, install it with jspm like so:

```sh
jspm install less
```

Then, in your jspm.config file, add less as the loader for less files (duh!):

```js
SystemJS.config({
  paths: {...}
  map: {...}
  meta: {
    '*.less': { loader: 'less' }
  }
});
```


### Configuration and options

This plugin is built on top of the [CSS plugin base](http://github.com/systemjs/plugin-css) which provides most of its features.
As such, system-less-plugin supports the same [build options](https://github.com/systemjs/plugin-css#builder-support).

Among other features, this includes source maps and generation of separate CSS files.

#### Import from jspm packages

Adds the ability for less to import from jspm packages (thanks to [@fernandogmar](https://github.com/fernandogmar) based on [lixiaoyan/less-plugin-jspm-import](https://github.com/lixiaoyan/less-plugin-jspm-import) )

In less file:

```
@import "jspm://packagename/path/to/file.less";
```

or if importing a css file an [import option](http://lesscss.org/features/#import-options) is required:

```
@import (less) "jspm://packagename/path/to/file.css";
```



#### In case npm is down...

It's very uncommon for NPM to be down, but if that's your case or
for any other reson you rather use github, then this is the way:

```sh
jspm install less=github:huasofoundries/systemjs-less-plugin
````



License
---

MIT
