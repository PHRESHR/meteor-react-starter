"use strict";

Package.describe({
  name: 'app-deps',
  version: '0.0.1',
  summary: 'Private package that loads NPM dependencies for the app',
  git: '',
  documentation: null
});

// NPM dependenices are listed here, with explicit versions. These can then be
// `required()`d in `client.browserify.js` and `server.js`.

Npm.depends({
  "classnames": "2.1.2",
  "moment": "2.10.3",
  "externalify": "0.1.0",
  "lodash": "3.10.0",
  "react-bootstrap": "0.23.7",
});

// Note specific package versions embedded below as well.

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'cosmos:browserify@0.5.0',
    'react@0.1.3',
  ], 'client');

  api.use([
    'universe:modules',
  ]);

  api.addFiles([
    'app.browserify.js',
    'app.browserify.options.json'
  ], 'client');

  api.addFiles([
    'server.js',
  ], 'server');

  api.addFiles([
    'main.import.jsx',
    'system-config.js'
  ]);

});
