const sequelize = require("./config/database.js");
const User = require("./models/User.js");
const Product = require("./models/Product.js");
const Order = require("./models/Order.js");
const Category = require("./models/Category.js");
const Supplier = require("./models/Supplier.js");

async function seed() {
  await sequelize.authenticate();

  const [user] = await User.findOrCreate({
    where: { email: "ortiguerras.admin@example.com" },
    defaults: {
      name: "Ortiguerras Admin",
      password: "123456",
      role: "admin",
      status: "active"
    }
  });

  const [category] = await Category.findOrCreate({
    where: { name: "Smart Workspace" },
    defaults: {
      description: "Tools and accessories for a productive workspace",
      status: "active",
      createdBy: "Ortiguerras Admin"
    }
  });

  const [supplier] = await Supplier.findOrCreate({
    where: { email: "northstar.supply@example.com" },
    defaults: {
      companyName: "Northstar Office Supply Co.",
      contactPerson: "Mikaela Santos",
      phone: "09175550184",
      address: "Quezon City, Philippines"
    }
  });

  const [product] = await Product.findOrCreate({
    where: { ProductName: "FocusDock Wireless Hub" },
    defaults: {
      ProductName: "FocusDock Wireless Hub",
      Description: "A compact wireless hub for an organized workstation",
      Category: category.name,
      Price: 1849.5,
      Quantity: 18,
      ExpirationDate: "N/A"
    }
  });

  await Order.findOrCreate({
    where: { orderNumber: "ORT-2026-001" },
    defaults: {
      total: product.Price,
      status: "pending",
      userId: user.id,
      productId: product.id
    }
  });

  console.log("Sample data inserted successfully.");
}

seed()
  .catch((error) => {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await sequelize.close();
  });
