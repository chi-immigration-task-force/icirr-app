const gulp = require('gulp');
const del = require('del');

const path = require('path');

gulp.task('clean:dist', function() {
  return del([
    path.join(process.cwd(), 'dist/*'),
  ], { force: true });
});
