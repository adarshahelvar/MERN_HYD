const express = require("express");
const router = express.Router();
const path = require("path");
const data = require("./admin");
const { getProducts, getSingleProduct, postCart } = require("../controller/shop");

router.get("/", getProducts);

router.get("/products/:id", getSingleProduct );

router.post("/cart", postCart)

module.exports = router;
