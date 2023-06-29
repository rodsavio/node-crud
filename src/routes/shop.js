const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/productDetail/:productId', productController.getProductsById);

module.exports = router;