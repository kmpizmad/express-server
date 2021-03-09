import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.(test|spec).ts'],
  verbose: true,
  forceExit: true,
  coverageDirectory: '__coverage__',
};

export default config;
