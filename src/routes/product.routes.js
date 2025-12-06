const express = require('express');

const productController = require('../controllers/product.controller');
const ProductValidator = require('../JoiValidationSchema/product.js');
const { commonValidate } = require('../middlewares/commonValidate.middleware');
const router = express.Router(); // Create a new Express router

// Define routes
router.get('/', productController.getProducts);         // GET /products
router.get('/:id',
     commonValidate({params : ProductValidator.id}),
     productController.getProductById);   // GET /products/:id

     
router.put('/:id',
    commonValidate({ params: ProductValidator.id, body: ProductValidator.update }),
    (req, res) => {
        const id = req.validatedParams?.id ;
        res.status(200).json({
            message: `Update product with ID ${id}`,
            validateParams: req.validateParams,
            validateBody: req.validateBody
        });
    }
);

module.exports = router;