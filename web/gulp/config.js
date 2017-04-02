const path = require('path');

const cwd = process.cwd();

const lintSrc = [
  path.join(cwd, 'src/js/**/*.jsx'),
  path.join(cwd, 'src/js/**/*.js'),
];

const testLintSrc = [
  path.join(cwd, 'test/**/*.jsx'),
  path.join(cwd, 'test/**/*.js'),
];

// Keep these alphabetized
module.exports = {
  html: {
    src: path.join(cwd, 'src/index.html'),
    devDest: path.join(cwd, 'dev'),
    prodDest: path.join(cwd, 'dist'),
  },

  images: {
    src: path.join(cwd, 'src/images/**'),
    devDest: path.join(cwd, 'dev/images'),
    prodDest: path.join(cwd, 'dist/images'),
  },

  lint: {
    src: lintSrc,
    testSrc: testLintSrc,
  },
};
