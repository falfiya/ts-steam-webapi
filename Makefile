build~debug:
	npx tsc

build~release:
	npx rollup -c

check:
	npx tsc --noEmit

clean:
	wsl rm -rf bin dist

rebuild: clean build~release
	-
