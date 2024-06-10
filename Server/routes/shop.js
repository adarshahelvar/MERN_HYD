const express = require("express");
const router = express.Router();
const path = require("path");
const data = require("./admin");
const { getProducts, getSingleProduct } = require("../controller/shop");

router.get("/", getProducts);

router.get("/products/:id", getSingleProduct )

module.exports = router;
