const path = require('path');
const rootDir = require('../util/path');

const service = require('../services/product');

exports.getProductsById = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await service.getProductById(productId);
        res.render('product-detail', { product });
    } 
    catch (error) {
        console.error(error);
    }
};

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await service.getAllProducts();
        res.render('shop', { prods: products, pageTitle: 'Shop', hasProducts: products.length > 0 });
    } 
    catch (error) {
        console.error(error);
    }
};

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = async (req, res, next) => {
    try {
        const newProduct = { title: req.body.title };
        await service.createNewProductAsync(newProduct);
        res.redirect('/');
    } 
    catch (error) {
        console.error(error);
    }
};