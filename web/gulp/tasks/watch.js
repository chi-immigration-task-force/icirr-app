const gulp = require('gulp');

const config = require('../config');

gulp.task('watch', ['watch:lint']);

gulp.task('watch:lint', ['lint'], function() {
  gulp.watch(config.lint.src, ['lint']);
});
