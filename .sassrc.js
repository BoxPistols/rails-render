const path = require('path');

module.exports = {
  includePaths: [path.resolve(__dirname, 'node_modules')],
  quietDeps: true,
  loadPaths: ['node_modules'],
  fiber: false,
  quietDeps: true,
  verbose: false,
  sourceMap: false,
  style: 'compressed',
  charset: false,
  errorCss: false,
  update: false,
  importer: function (url, prev, done) {
    if (url.startsWith('~')) {
      url = path.resolve('node_modules', url.substr(1));
    }
    return { file: url };
  }
};  