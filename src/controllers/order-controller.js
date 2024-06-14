const prisma = require('../prismaC');

const placeOrder = async (req, res) => {
  const { productId, quantity, totalPrice, userId } = req.body;

  if (!productId || !quantity || !totalPrice || !userId) {
    return res.status(400).json({ error: "Missing required fields: productId, quantity, totalPrice, and userId." });
  }

  try {
    const order = await prisma.order.create({
      data: { productId, quantity, totalPrice, userId },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { placeOrder, getAllOrders };

