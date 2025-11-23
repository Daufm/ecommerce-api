const express = require('express');

const productController = require('../controllers/product.controller');

const router = express.Router(); // Create a new Express router

// Define routes
router.get('/', productController.getProducts);         // GET /products
router.get('/:id', productController.getProductById);   // GET /products/:id

module.exports = router;