const express = require("express");
const router = express.Router();
const path = require("path");
const { getAddProduct, postAddProduct } = require("../controller/products");

// /admin/add-product =>GET
router.get("/add-product", getAddProduct);

// /admin/add-product=>POST
router.post("/add-product", postAddProduct);

module.exports = router;
