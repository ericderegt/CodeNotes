var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var glob = require('glob');
var watchify = require('watchify');
var streamify = require('gulp-streamify');

// Keeping alll folder and file inputs here and then reference for specific tasks below
var path = {
  HTML: 'public/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'public/dist',
  DEST_BUILD: 'public/dist/build',
  DEST_SRC: 'public/dist/src',
  ENTRY_POINT: 'public/js/app.js'
};

gulp.task('copy', function() {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

// watch called as part of default task / only in production
gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var bundler = browserify({
    entries: [path.ENTRY_POINT],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });

  var watcher = watchify(bundler);

  return watcher.on('update', function() {
    watcher
      .transform(babelify)
      .bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
  })
  // so we bundle and pipe to dist folder before any updates occur. updates then will overwrite
    .transform(babelify)
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

// build task for production only
gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT]
  })
    .transform(babelify)
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});

// replaceHTML changes JS file we are including in our index.html
gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

// browserify unit test files so that 
gulp.task('browserify-unit-tests', function() {
  var bundler = browserify();
  glob.sync('./test/unit/*.js')
  .forEach(function(file) {
    bundler.add(file);
  });
  return bundler
  .bundle({ debug: true })
  .pipe(source('browserified_tests.js'))
  .pipe(gulp.dest('./test/unit'));
});

gulp.task('default', ['watch']);
gulp.task('production', ['replaceHTML', 'build']);
