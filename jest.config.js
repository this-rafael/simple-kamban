/* eslint-disable unicorn/prefer-module */
// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    './apps/**/core/strategies/*.ts',
    './apps/**/core/protocols/*.ts',
    './apps/**/core/usecases/*.ts',
    '(.*)/core/protocols/(.*).(t|j)s',
    '(.*)/core/strategies/(.*).(t|j)s',
    '(.*)/core/usecases/(.*).(t|j)s',
  ],
  coverageDirectory: './coverage',
  modulePathIgnorePatterns: ['src/infra'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.(.*)\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
}
