const express = require('express');
const { getAllProducts, getOneProduct, addProduct, deleteProduct } = require('../controllers/product-controller');


const router = express.Router();

router.get('/',  getAllProducts);  // This maps to /api/products
router.get('/:id',  getOneProduct);         // This maps to /api/:id
router.post('/',  addProduct);              // This maps to /api/
router.delete('/:id',  deleteProduct);      // This maps to /api/:id

module.exports = router;



