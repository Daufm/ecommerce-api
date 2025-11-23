const categoryController = require('../controllers/category.controller.js');
const express = require('express')

const router = express.Router();


router.get('/' , categoryController.getAllCategories)


module.exports = router;