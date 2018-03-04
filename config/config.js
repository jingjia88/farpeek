const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'thinkandspeak'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/thinkandspeak-development',
    storage: rootPath + '/data/thinkandspeak-development.db'
  },

  test: {
    root: rootPath,
    app: {
      name: 'thinkandspeak'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/thinkandspeak-test',
    storage: rootPath + '/data/thinkandspeak-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'thinkandspeak'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/thinkandspeak-production',
    storage: rootPath + 'data/thinkandspeak-production'
  }
};

module.exports = config[env];
