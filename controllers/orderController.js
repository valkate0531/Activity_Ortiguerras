const Order = require("../models/Order.js");

exports.insert = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ status: "true", data: order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.index = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.show = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
