VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

default: install
.PHONY: default test install tag remove_tag

version:
	@echo $(VERSION)
	

install:
	npm install
	$$(npm bin)/jspm install

build_node:
	$$(npm bin)/jspm build lessjs src/bundled_less/less.node.js --node  --minify

build_browser:
	$$(npm bin)/jspm build lessjs/dist/less.js src/bundled_less/less.browser.js  --minify

build_jspm_less_plugin:
	$$(npm bin)/babel  jspm-less-plugin/es6 -d jspm-less-plugin
	$$(npm bin)/jspm build jspm-less-plugin/index.js src/jspm-less-plugin.js


build: build_node build_browser	build_jspm_less_plugin

test:
	$$(npm bin)/mocha 

	

update_version:
ifeq ($(shell expr "${CURRENT_MAJOR}" \> "$(NEXT_MAJOR)"),1)
	$(error "v" parameter is lower than current version ${VERSION})
endif
ifeq ($(shell expr "${CURRENT_MINOR}" \> "$(NEXT_MINOR)"),1)
	$(error "v" parameter is lower than current version ${VERSION})
endif
ifeq ($(shell expr "${CURRENT_HOTFIX}" \> "$(NEXT_HOTFIX)"),1)
	$(error "v" parameter is lower than current version ${VERSION})
endif
ifeq ($(v),)
	$(error v is undefined. Use e.g. make tag v=1.0.0 or make release v=1.0.0)
endif
ifeq (${VERSION},$(v))
	$(error v is already the current version)
endif
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/"$(VERSION)"/"$(v)"/g package.json

check_version:
	$(eval SPLIT_VERSION = $(subst ., ,${VERSION}))
	$(eval NEXT_VERSION := $(subst ., ,${v}))
	$(eval CURRENT_MAJOR := $(word 1,$(SPLIT_VERSION)))
	$(eval CURRENT_MINOR := $(word 2,$(SPLIT_VERSION)))
	$(eval CURRENT_HOTFIX := $(word 3,$(SPLIT_VERSION)))
	$(eval NEXT_MAJOR := $(word 1,$(NEXT_VERSION)))
	$(eval NEXT_MINOR := $(word 2,$(NEXT_VERSION)))
	$(eval NEXT_HOTFIX := $(word 3,$(NEXT_VERSION)))


tag_and_push:
		git add --all
		git commit -a -m "Tag v $(v) $(m)"
		git tag v$(v)
		git push
		git push --tags

tag: build release

release: test check_version update_version tag_and_push	


		
remove_tag:
ifeq ($(t),)
	$(error t is undefined, you must config a tag name. e.g. make remove_tag t=v1.0.0)
endif
	git tag -d $(t)
	git push origin :refs/tags$(t)