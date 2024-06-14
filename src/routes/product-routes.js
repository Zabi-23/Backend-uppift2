
const express = require('express');
const { getAllProducts, getOneProduct, addProduct, deleteProduct } = require('../controllers/product-controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',  getAllProducts);
router.get('/:id',  getOneProduct);
router.post('/',  addProduct);
router.delete('/:id',  deleteProduct);

module.exports = router;


