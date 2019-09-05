module.exports = {
    moduleFileExtensions: [
      'js',
      'json',
      'vue',
    ],
    transform: {
      '.*\\.(vue)$': 'vue-jest',
      '^.+jsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
    ],
  }
  