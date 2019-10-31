module.exports = {
  globals: {
    NODE_ENV: 'test',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  modulePaths: [
    'src',
    'node_modules',
  ],
  setupFiles: [
    '<rootDir>/tests/setupTests.js'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "<rootDir>/data/",
    "<rootDir>/tests/e2e/",
    "<rootDir>/node_modules/",
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest', // without this there will be errors on further transforms
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileTransformer.js',
    '\\.(css|less|scss)$': '<rootDir>/tests/fileTransformer.js',
  },
  transformIgnorePatterns: [],
};
