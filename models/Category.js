const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active"
  },
  createdBy: {
    type: DataTypes.STRING
  }
});

module.exports = Category;