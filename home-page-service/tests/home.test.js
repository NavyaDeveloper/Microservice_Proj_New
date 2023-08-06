const request = require('supertest');
const app = require('../index'); // Assuming your main application file is named index.js

describe('Home Page Service', () => {
  it('should return a welcome message and list of products', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to the Sample Home Page!');
    expect(response.body.products).toHaveLength(3); // Assuming there are 3 sample products
  });
});
