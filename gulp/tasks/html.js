const gulp = require('gulp');
const removeHtmlComments = require('gulp-remove-html-comments');
const inject = require('gulp-inject-string');

const config = require('../config');

const defaultGATrackingId = 'UA-113881509-1';
const defaultRollbarEnv = 'dev';

gulp.task('html', function() {
  return gulp.src(config.html.src)
    .pipe(inject.replace('GA_TRACKING_ID', process.env.GA_TRACKING_ID || defaultGATrackingId))
    .pipe(inject.replace('ROLLBAR_ENV', process.env.ROLLBAR_ENV || defaultRollbarEnv))
    .pipe(gulp.dest(config.html.devDest));
});

gulp.task('html:prod', function() {
  return gulp.src(config.html.src)
    .pipe(removeHtmlComments())
    .pipe(inject.replace('GA_TRACKING_ID', process.env.GA_TRACKING_ID || defaultGATrackingId))
    .pipe(inject.replace('ROLLBAR_ENV', process.env.ROLLBAR_ENV || defaultRollbarEnv))
    .pipe(gulp.dest(config.html.prodDest));
});
