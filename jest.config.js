module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['__tests__/setup.ts'],
  moduleNameMapper: {
    '^@configs': '<rootDir>/src/configs/index.ts',
    '^@libs/(.*)': '<rootDir>/src/libs/$1',
    '^@errors/(.*)': '<rootDir>/src/errors/$1',
    '^@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '^@validators/(.*)': '<rootDir>/src/validators/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts']
}
