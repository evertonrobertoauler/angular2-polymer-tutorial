var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var rm = require('gulp-rm');
var gzip = require('gulp-gzip');

gulp.task('vulcanize', function () {
  return gulp.src('src/elements.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: [],
      stripExcludes: false,
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['vulcanize'], function () {
  gulp.watch('dist/index.html', ['vulcanize']);
  gulp.watch('src/elements.html', ['vulcanize']);
});

gulp.task('bower_components:rm:ts', function () {
  return gulp.src('src/bower_components/**/*.ts', { read: false }).pipe(rm())
});

gulp.task('gzip', function() {
  gulp.src('dist/**/*')
    .pipe(gzip())
    .pipe(gulp.dest('dist'));
});