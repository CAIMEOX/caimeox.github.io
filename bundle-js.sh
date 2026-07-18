#!/bin/bash
set -euo pipefail

npm ci

./node_modules/.bin/esbuild --minify --bundle javascript-source/forester.js --outfile=forester.js

