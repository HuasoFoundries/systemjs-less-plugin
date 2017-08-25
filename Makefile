VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

default: install
.PHONY: default test install tag

version:
	@echo $(VERSION)
	

install:
	npm install
	jspm install

build_node:
	jspm build lessjs src/bundled_less/less.node.js --node  --minify

build_browser:
	jspm build lessjs/dist/less.js src/bundled_less/less.browser.js  --minify

build_jspm_less_plugin:
	$$(npm bin)/babel  jspm-less-plugin/es6 -d jspm-less-plugin
	jspm build jspm-less-plugin/index.js src/jspm-less-plugin.js


build: build_node build_browser	build_jspm_less_plugin

test:
	./node_modules/.bin/mocha 

update_version:
ifeq ($(v),)
	$(error v is undefined)
endif
ifeq (${VERSION},$(v))
	$(error v is already the current version)
endif
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/"$(VERSION)"/"$(v)"/g package.json

tag_and_push:
		git add --all
		git commit -a -m "Tag v $(v) $(m)"
		git tag v$(v)
		git push --tags
		git push
		npm publish

tag: build test release

release: update_version tag_and_push	
		
