const express = require('express');
const app = express();
const PORT = 5002;

// Sample data for users (in production, use a database or a proper user management system)
const users = [
  { id: 1, username: 'user1', password: 'pass1', role: 'user' },
  { id: 2, username: 'admin', password: 'adminpass', role: 'admin' },
];

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    return res.json({ message: 'Login successful', role: user.role });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
});

module.exports = app; // Export the Express app for testing
