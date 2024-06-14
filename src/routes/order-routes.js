


const express = require('express');
const { placeOrder, getAllOrders } = require('../controllers/order-controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/',  placeOrder);
router.get('/',  getAllOrders);

module.exports = router;
