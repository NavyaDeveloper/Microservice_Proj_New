const express = require('express');
const app = express();
const PORT = 5001;

// Sample data for the home page
const products = [
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 19.99 },
  { id: 3, name: 'Product C', price: 7.99 },
];

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Sample Home Page!', products });
});

app.listen(PORT, () => {
  console.log(`Home Page Service is running on port ${PORT}`);
});
