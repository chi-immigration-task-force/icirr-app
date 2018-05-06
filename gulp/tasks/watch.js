const gulp = require('gulp');

const config = require('../config');

const gulpWatchOptions = {
  interval: 2000,
  usePolling: true,
 };

gulp.task('watch', ['watch:lint']);

gulp.task('watch:lint', ['lint'], function() {
  gulp.watch(config.lint.src, gulpWatchOptions, ['lint']);
});
