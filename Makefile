build~debug:
	npx tsc

build~release:
	npx rollup -c

run: build~debug
	node bin/main

check:
	npx tsc --noEmit

clean:
	wsl rm -rf bin dist

rebuild: clean build~release
	-
