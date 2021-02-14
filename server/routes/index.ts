import testRouter from './testEndpoint';

export default [
  {
    uri: '/test',
    handler: testRouter,
    errorHandler: false,
  },
];
