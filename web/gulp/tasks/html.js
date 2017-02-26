const gulp = require('gulp');
const insertLines = require('gulp-insert-lines');
const removeHtmlComments = require('gulp-remove-html-comments');

const config = require('../config');

gulp.task('html', function() {
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.devDest));
});

gulp.task('html:prod', function() {
  return gulp.src(config.html.src)
    .pipe(insertLines({
      after: /<!-- INJECT STYLESHEET HERE -->$/,
      'lineAfter': '    <link rel="stylesheet" type="text/css" href="css/index.css">'
    }))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(config.html.prodDest));
});
