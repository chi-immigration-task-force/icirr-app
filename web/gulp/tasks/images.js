const gulp = require('gulp');

const config = require('../config');

gulp.task('images', function() {
  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.devDest));
});
