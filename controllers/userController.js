const User = require("../models/User.js");

exports.insert = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ status: "true", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.index = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
