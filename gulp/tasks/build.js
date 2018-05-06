const gulp = require('gulp');

gulp.task('build', ['clean:dist', 'html:prod', 'webpack:prod']);
