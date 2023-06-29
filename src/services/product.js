const dbService = require('../infrastructure/database-generic-methods');
const ProductModel = require('../models/product');

exports.getAllProducts = async () => {
    return await dbService.getAll(ProductModel);
};

exports.getProductById = async (id) => {
    return await dbService.getById(ProductModel, id);
};

exports.createNewProductAsync = async (productRegister) => {
    await dbService.createRegisterAsync(ProductModel, productRegister);
};