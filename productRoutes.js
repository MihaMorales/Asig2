const express = require('express');
const router = express.Router();
const productController = require('./productController');

// Define routes for handling CRUD operations

// Get all products
router.get('/api/products', productController.getProducts);

// Get a product by ID
router.get('/api/products/:id', productController.getProductById);

// Add a new product
router.post('/api/products', productController.createProduct);

// Update a product by ID
router.put('/api/products/:id', productController.updateProduct);

// Remove a product by ID
router.delete('/api/products/:id', productController.deleteProduct);

// Corrected route to remove all products
router.delete('/api/products', productController.deleteAllProducts);

// Corrected route to find products by name containing a keyword
// You can use the query parameter 'name' to specify the keyword
router.get('/api/products/search', productController.findProductsByName);

module.exports = router;
