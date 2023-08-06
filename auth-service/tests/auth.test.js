const request = require('supertest');
const app = require('../index'); // Assuming your main application file is named index.js

describe('Authentication Service', () => {
  it('should return "Login successful" with role for valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'user1', password: 'pass1' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
    expect(response.body.role).toBe('user');
  });

  it('should return "Invalid credentials" for invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'invaliduser', password: 'invalidpass' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid credentials');
  });
});
