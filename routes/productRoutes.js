const express = require("express");
const { index, show, insert } = require("../controllers/productController.js");

const router = express.Router();

router.post("/insert", insert);
router.get("/", index);
router.get("/:id", show);

module.exports = router;
