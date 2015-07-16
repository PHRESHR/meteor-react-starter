Package.describe({
  name: 'app-postcss',
  version: '0.1.0',
  summary: 'PostCSS with plugins',
  git: '',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('compiler.js', 'server');
  api.export('PostCSS', 'server');
});

var npmDependencies = {
  'autoprefixer-core': '5.2.1',
  'postcss': '4.1.16',
  'postcss-import': '6.1.1',
  'postcss-mixins': '0.3.0',
  'postcss-nested': '0.3.2',
  'cssnext': '1.8.1',
  'lost': '6.5.0'
};

Npm.depends(npmDependencies);

Package.registerBuildPlugin({
  name: 'postcss',
  use: [],
  sources: [
    'compiler.js',
    'plugin/postcss.js'
  ],
  npmDependencies: npmDependencies
});

Package.onTest(function(api) {
  api.use([
  ]);
  api.add_files([
  ], 'client');
});
