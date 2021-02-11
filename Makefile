run: build
	node bin/main

build:
	npx tsc

test:
	npx mocha -r ts-node/register test/**.test.ts
