const Product = require("../models/Product.js");

exports.insert = async (req, res) => {
  try {
    const {
      ProductName,
      Description,
      Category,
      Price,
      Quantity,
      ExpirationDate
    } = req.body;
    const product = await Product.create({
      ProductName,
      Description,
      Category,
      Price,
      Quantity,
      ExpirationDate
    });

    res.status(201).json({
      status: "true",
      data: product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.index = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.show = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
