var Future = Npm.require('fibers/future');
var postcss = Npm.require('postcss');
var atImport = Npm.require('postcss-import');
var mixins = Npm.require('postcss-mixins');
var nested = Npm.require('postcss-nested');
var lostg = Npm.require('lost');
var cssnext = Npm.require('cssnext');
var _ = Npm.require('underscore');

var compile = function (compileStep, isLiterate, postcssExtend) {
  var input = compileStep.read().toString('utf8');
  var filename = compileStep.inputPath;

  // Skips files with //@import-only as their first line.
  if (input.indexOf('//@import-only') === 0) return;

  var options = {
    from: filename,
    sourcemap: true,
    map: { inline: false, annotation: false }
  };

  // extend default options if defined
  if (postcssExtend) {
    options = _.extend(options, postcssExtend);
  }

  try {
    var output = postcss()
      .use(
        atImport({ from: filename })
      )
      .use(mixins())
      .use(nested())
      .use(cssnext(options))
      .process(input);
    // add the result to the app with sourcemaps
    compileStep.addStylesheet({
      path: filename,
      data: output.css,
      sourceMap: JSON.stringify(output.map)
    });
  } catch( e ) {
    compileStep.error({
      message: "postcss compiler error: " + e.message,
      sourcePath: e.filename || compileStep.inputPath,
      line: e.line,
      column: e.column + 1
    });
  }
};

PostCSS = {
  compile: compile
};
