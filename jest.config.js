/* eslint-disable id-length */
module.exports = {
  globals: {
    td: true,
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./helper.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'dist'],
  collectCoverage: false,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: ['src/**/*.ts', '!node_modules/**', '!**/*.spec.ts'],
}
