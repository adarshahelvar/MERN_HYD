const express = require("express");
const router = express.Router();
const path = require("path");
const data = require("./admin");

router.get("/", (req, res, next) => {
  const products = data.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop page",
    path: "/",
    hasProducts: products.lenghth > 0, 
    activeShop: true,
  });
});

module.exports = router;
