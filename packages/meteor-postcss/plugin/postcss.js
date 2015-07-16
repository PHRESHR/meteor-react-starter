Plugin.registerSourceHandler('post.css', { archMatching: 'web' }, PostCSS.compile);

// register import.css files with the dependency watcher, without actually
// processing them. There is a similar rule in the stylus package.
Plugin.registerSourceHandler('import.post.css', function () {
  // do nothing
});
