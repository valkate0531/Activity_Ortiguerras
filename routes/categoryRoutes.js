const express = require("express");
const { index, show, insert } = require("../controllers/categoryController.js");

const router = express.Router();

router.get("/", index);
router.post("/insert", insert);
router.get("/:id", show);

module.exports = router;
