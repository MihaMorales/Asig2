

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('./database');
const productRoutes = require('./productRoutes'); // Import your routes
app.use(express.json());
// Define and use middleware if needed

// Use the productRoutes
app.use(productRoutes);

// Define a basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
