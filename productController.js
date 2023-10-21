const Product = require('./product'); // Import the Mongoose model

// Controller functions for CRUD operations

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found.' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
};

// Add a new product
const createProduct = async (req, res) => {
  const { name, description, price, quantity, category } = req.body;
  const newProduct = new Product({ name, description, price, quantity, category });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: 'Error creating the product.' });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, category } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price, quantity, category }, { new: true });
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found.' });
    } else {
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the product.' });
  }
};

// Remove a product by ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndRemove(id);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found.' });
    } else {
      res.json(deletedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the product.' });
  }
};

// Remove all products
const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All products have been removed.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting all products.' });
  }
};

// Find products by name containing a keyword
const findProductsByName = async (req, res) => {
    const { name: keyword } = req.query;
    try {
      const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
      if (products.length === 0) {
        res.status(404).json({ error: 'No products found with the specified keyword.' });
      } else {
        res.json(products);
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'An error occurred while searching for products.' });
    }
  };
  

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  findProductsByName,
};
