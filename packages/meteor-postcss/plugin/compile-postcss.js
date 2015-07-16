var Future = Npm.require('fibers/future');
var path = Npm.require('path');
var autoprefixer = Npm.require('autoprefixer-core');
var postcss = Npm.require('postcss');
var mixins = Npm.require('postcss-mixins');
var nested = Npm.require('postcss-nested');
var cssnext = Npm.require('cssnext');
var lostg = Npm.require('lost');

Plugin.registerSourceHandler('post.css', { archMatching: 'web' }, function(compileStep) {
  var f = new Future;

  var file = compileStep.read().toString('utf8');

  // Skips files with //@import-only as their first line.
  if (file.indexOf('//@import-only') === 0) return;

  try {
    var css = f.wait();
  } catch (e) {
    compileStep.error({
      message: 'PostCSS compiler error: ' + e.message
    });
    return;
  }

  css = postcss([
    // importCSS({
		// 	from: 'client/app/styles/*.css'
		// }),
		mixins,
		nested,
		cssnext,
		lostg
  ]).process(css).css;

  compileStep.addStylesheet({
    path: compileStep.inputPath + '.css',
    data: css
  });
});


// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler('import.post.css', function () {
  // Do nothing
});
