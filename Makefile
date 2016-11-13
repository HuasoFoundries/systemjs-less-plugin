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
	#cd less-bundle && jspm build less ../src/less.node.js --node  --minify
	jspm build lessjs src/less.node.js --node  --minify

build_browser:
	#cd less-bundle && jspm build less/dist/less.js ../src/less.browser.js  --minify
	jspm build lessjs/dist/less.js src/less.browser.js  --minify

build: build_node build_browser	

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
		
