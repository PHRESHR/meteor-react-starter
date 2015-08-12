#!/bin/sh

webpack --config webpack.config.client.prod.js --progress
webpack --config webpack.config.server.prod.js --progress
cd meteor_files
[ ! -d .prod ] || mv .prod prod
rm -rvf ../dist
meteor build ../dist
