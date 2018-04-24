module.exports = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.spec.js'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  coverageDirectory: '<rootDir>/.coverage',
  collectCoverageFrom: [
    'lib/**/*.js',
    '!**/node_modules/**'
  ],
  watchman: false,
  setupFiles: ['<rootDir>/../../node_modules/regenerator-runtime/runtime'],
  setupTestFrameworkScriptFile: 'jest-extended'
}