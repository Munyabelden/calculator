// jest.config.js

module.exports = {
    // other Jest configuration options...
    watchPathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '^.+\\.bak$',
      '^.+\\.tmp$',
      '^.+\\.log$'
    ],
  };
  