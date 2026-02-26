export default {
  globals: { IS_REACT_ACT_ENVIRONMENT: true },
  sandboxInjectedGlobals: ['IS_REACT_ACT_ENVIRONMENT'],
  testEnvironment: './.jest/jsdom-environment.js',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(@allo|utils)/)'],
  moduleNameMapper: {
    '^@allo/(.*)$': '<rootDir>/../utils/src/helpers',
  },
};
