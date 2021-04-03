module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['__tests__/setup.ts'],
  // This moduleWrapper is required to make sure all the tsconfig.paths resolutions work well
  moduleNameMapper: {
    '^@configs': '<rootDir>/src/configs/index.ts',
    '^@libs/(.*)': '<rootDir>/src/libs/$1',
    '^@errors/(.*)': '<rootDir>/src/errors/$1',
    '^@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '^@validators/(.*)': '<rootDir>/src/validators/$1'
  },
  // Setup file for preparing the test environment
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts']
}
