export default {
  globals: { IS_REACT_ACT_ENVIRONMENT: true },
  sandboxInjectedGlobals: ['IS_REACT_ACT_ENVIRONMENT'],
  testEnvironment: './.jest/jsdom-environment.js',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: [],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(@allo|utils)/)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/.jest/style-mock.js',
    '^@allo/utils/(.*)$': '<rootDir>/../../packages/utils/src/$1',
    '^@allo/ui$': '<rootDir>/../../packages/ui/src/index.ts',
    '^@allo/hooks$': '<rootDir>/../../packages/hooks/src/index.ts',
    '^@/(.*)$': '<rootDir>/$1',
  },
};
