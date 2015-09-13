var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');

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

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

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

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['watch']);
gulp.task('production', ['replaceHTML', 'build']);
