const config = require('./config'); 
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes.js')
const userRoutes = require('./routes/user.routes.js');
const requestsLogger = require('./middlewares/requestLogger.js');
const requestIdGenerator = require('./middlewares/requestIdGenerator.js');
const connectDB= require('./config/dbConfig.js');
const app = express();

// Global middleware
app.use(express.json()); 
app.use(helmet()); // Security middleware
app.use(cors({
  origin: '*', // Allow all origins - adjust as needed for security
})); 

// HTTP request logger middleware
app.use(morgan('dev')); 
// app.use(requestsLogger);
// app.use(requestIdGenerator);

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
app.use(`/api/v1/products`, productRoutes);

app.use('/api/v1/category',  categoryRoutes)
app.use('/api/v1/users', userRoutes )

// Error handling middleware (example - more advanced in Module 2)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(config.PORT, async () => {
   await connectDB();
  console.log(`Server is running on http://localhost:${config.PORT}`);
  console.log(`API Version: ${config.API_VERSION}`);
  console.log(`Environment: ${config.NODE_ENV}`);
});