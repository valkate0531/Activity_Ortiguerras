const express = require("express");
const userRoutes = require("./userRoutes.js");
const productRoutes = require("./productRoutes.js");
const orderRoutes = require("./orderRoutes.js");
const categoryRoutes = require("./categoryRoutes.js");
const supplierRoutes = require("./supplierRoutes.js");
const product = require("../controllers/productController.js");
const category = require("../controllers/categoryController.js");
const order = require("../controllers/orderController.js");
const user = require("../controllers/userController.js");
const supplier = require("../controllers/supplierController.js");
const { insert } = require("../controllers/productController.js");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Activity API is running" });
});

router.post("/insert", insert);

router.get("/product", product.index);
router.get("/product/:id", product.show);
router.post("/product", product.insert);

router.get("/category", category.index);
router.get("/category/:id", category.show);
router.post("/category", category.insert);

router.get("/order", order.index);
router.get("/order/:id", order.show);
router.post("/order", order.insert);

router.get("/user", user.index);
router.get("/user/:id", user.show);
router.post("/user", user.insert);

router.get("/supplier", supplier.index);
router.get("/supplier/:id", supplier.show);
router.post("/supplier", supplier.insert);

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/product", productRoutes);
router.use("/orders", orderRoutes);
router.use("/categories", categoryRoutes);
router.use("/suppliers", supplierRoutes);

module.exports = router;
