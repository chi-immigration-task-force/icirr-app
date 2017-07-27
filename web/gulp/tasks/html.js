const gulp = require('gulp');
const removeHtmlComments = require('gulp-remove-html-comments');

const config = require('../config');

gulp.task('html', function() {
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.devDest));
});

gulp.task('html:prod', function() {
  return gulp.src(config.html.src)
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(config.html.prodDest));
});
