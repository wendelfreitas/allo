module.exports = {
  testEnvironment: './.jest/jsdom-environment.js',
  globals: { IS_REACT_ACT_ENVIRONMENT: true },
  sandboxInjectedGlobals: ['IS_REACT_ACT_ENVIRONMENT'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
};
