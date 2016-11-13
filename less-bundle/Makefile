
default: build
.PHONY: default build

build_node:
	jspm build less ../lessjs/less.node.js --node --skip-source-maps --minify

build_browser:
	jspm build less/dist/less.js ../lessjs/less.browser.js --skip-source-maps --minify

build: build_node build_browser	