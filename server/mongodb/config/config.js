var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';
var configGlobal = require('./../../../config');

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'gitlogg-api'
    },
    port: process.env.PORT || configGlobal.PORT_EXPRESS_MONGODB_APP,
    db: 'mongodb://localhost/gitlogg-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'gitlogg-api'
    },
    port: process.env.PORT || configGlobal.PORT_EXPRESS_MONGODB_APP,
    db: 'mongodb://localhost/gitlogg-api-test',
  },

  production: {
    root: rootPath,
    app: {
      name: 'gitlogg-api'
    },
    port: process.env.PORT || configGlobal.PORT_EXPRESS_MONGODB_APP,
    db: 'mongodb://localhost/gitlogg-api-production',
  }
};

module.exports = config[env];
