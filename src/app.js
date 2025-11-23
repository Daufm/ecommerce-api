const config = require('./config'); 

const express = require('express');
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes.js')
const app = express();

// Global middleware
app.use(express.json()); 

// Welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    message: `Welcome to the E-commerce API ${config.API_VERSION}!`,
    environment: config.NODE_ENV,
    runningOnPort: config.PORT,
    customMessage: config.MESSAGE
  });
});

// API Routes
// All product-related routes will be prefixed with /api/products
app.use(`/api/products`, productRoutes);

app.use('/api/category',  categoryRoutes)

// Error handling middleware (example - more advanced in Module 2)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
  console.log(`API Version: ${config.API_VERSION}`);
  console.log(`Environment: ${config.NODE_ENV}`);
});