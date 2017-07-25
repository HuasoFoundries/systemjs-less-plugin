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
	$$(npm bin)/babel  jspm-less-plugin -d src/jspm-less-plugin


build: build_node build_browser	build_jspm_less_plugin

test:
	./node_modules/.bin/mocha 

update_version:
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/'"$(VERSION)"'/'"$(v)"'/ package.json

tag_and_push:
		git add --all
		git commit -a -m "Tag v $(v) $(m)"
		git tag v$(v)
		git push
		git push --tags
		npm publish

tag: update_version tag_and_push		
		
