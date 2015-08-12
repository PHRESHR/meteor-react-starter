#!/bin/sh

(
  node dev-server.js &
  webpack --config webpack.config.server.js --watch &
  cd meteor_files &&
  ([ ! -d prod ] || mv prod .prod) &&
  meteor --settings ../meteor_settings/devel.json &
) | cat

