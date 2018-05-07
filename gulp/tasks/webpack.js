const gulp = require('gulp');
const shell = require('gulp-shell');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', () => {
  const webpackDevConfig = require('../../webpack/webpack.config.dev');
  new WebpackDevServer(webpack(webpackDevConfig), {
    contentBase: webpackDevConfig.output.path,
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    quiet: false,
  }).listen(3000, '0.0.0.0', function(err/*, result*/) {
    if (err) {
      console.info(err);
      return;
    }

    console.info('Listening at localhost:3000');
  });
});

gulp.task('webpack:prod', shell.task([
  'NODE_ENV=production ./node_modules/webpack/bin/webpack.js --config ./webpack/webpack.config.prod.js --bail'
]));
