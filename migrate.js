const { Sequelize } = require("sequelize");
const inquirer = require("inquirer");
const sequelize = require("./config/database.js");
require("./models/User.js");
require("./models/Product.js");
require("./models/Category.js");
require("./models/Order.js");
require("./models/Supplier.js");

const databaseName = "ortiguerrasdb";
const rootSequelize = new Sequelize("mysql://root:@localhost:3306/", {
  logging: false
});

async function createDatabase() {
  const { createDb } = await inquirer.prompt([
    {
      type: "confirm",
      name: "createDb",
      message: `Database '${databaseName}' may not exist. Create it?`,
      default: true
    }
  ]);

  if (createDb) {
    await rootSequelize.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``);
    console.log("Database created (if it did not exist).");
  }
}

async function migrate() {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Database synchronized.");
}

createDatabase()
  .then(migrate)
  .catch((error) => {
    console.error("Migration failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await rootSequelize.close();
    await sequelize.close();
  });
