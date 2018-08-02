'use strict';
process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');


describe('index', function() {
  it('should respond with status 200', done => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
