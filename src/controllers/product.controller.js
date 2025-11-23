// src/controllers/product.controller.js
const productService = require('../services/product.service');
const {handleServerError , handleNotFoundError} = require('../utils/errorHandler.js')
/**
 * Handles GET /products requests.
 * Returns a list of all products.
 */
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
     handleServerError(res, error ,'Failed to Retrive Product')
  }
};

/**
 * Handles GET /products/:id requests.
 * Returns a single product by ID.
 */
const getProductById = async (req, res) => {
  try {
    const { id } = req.params; // Extract product ID from URL parameters
    const product = await productService.getProductById(id);

    if (!product) {
      return handleNotFoundError(res, `Product with ID ${id} not found`);
    }

    res.status(200).json(product);
  } catch (error) {
    handleServerError(res, error, `Failed to Retrieve Product with ID ${req.params.id}`);
  }
};


module.exports = {
  getProducts,
  getProductById,
};