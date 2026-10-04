const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ProductName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.TEXT
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  Quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  ExpirationDate: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Product;