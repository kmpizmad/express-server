import express, { Router } from 'express';
import supertest from 'supertest';
import { createServer } from '../..';

const testRouter = Router();
testRouter
  .route('/')
  .get(async (req, res, next) => {
    res.json({ name: 'Test', message: 'Success' });
  })
  .post(async (req, res, next) => {
    res.status(201).json({ data: req.body });
  });

const server = createServer({
  middlewares: [express.urlencoded({ extended: true }), express.json()],
  routes: [{ uri: '/test', handlers: [testRouter], errorHandler: false }],
});

const request = supertest(server);

describe('Test endpoint', () => {
  it('GET request', async done => {
    const { body, status } = await request.get('/test');
    expect(body).toStrictEqual({ name: 'Test', message: 'Success' });
    expect(status).toBe(200);
    done();
  });
  it('POST request', async done => {
    const { body, status } = await request
      .post('/test')
      .send({ name: 'Test', message: 'Success' });
    expect(body).toStrictEqual({ data: { name: 'Test', message: 'Success' } });
    expect(status).toBe(201);
    done();
  });
});
