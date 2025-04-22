const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user').populate('products.product');
  res.json(orders);
};

module.exports = { getAllOrders };
