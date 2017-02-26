const gulp   = require('gulp');
const eslint = require('gulp-eslint');
const cache  = require('gulp-cached');
const path   = require('path');

const config = require('../config');

const cwd = process.cwd();
const eslintrcConfig = path.join(cwd, '.eslintrc');
const eslintrcTestConfig = path.join(cwd, 'test/.eslintrc');

gulp.task('lint', function() {
  return gulp.src(config.lint.src)
    .pipe(cache('eslintService'))
    .pipe(eslint(eslintrcConfig))
    .pipe(eslint.format('table'))
    .pipe(eslint.result(function(result) {
      if (result.warningCount > 0 || result.errorCount > 0) {
        delete cache.caches.eslintService[path.resolve(result.filePath)];
      }
    }));
});

gulp.task('lint:test', function() {
  return gulp.src(config.lint.testSrc)
    .pipe(cache('eslintServiceTest'))
    .pipe(eslint(eslintrcTestConfig))
    .pipe(eslint.format('table'))
    .pipe(eslint.result(function(result) {
      if (result.warningCount > 0 || result.errorCount > 0) {
        delete cache.caches.eslintServiceTest[path.resolve(result.filePath)];
      }
    }));
});
