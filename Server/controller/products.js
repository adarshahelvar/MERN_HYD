const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // intence and instantiation
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAllProducts((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop page",
      path: "/",
      hasProducts: products.lenghth > 0,
      activeShop: true,
    });
  });
};
