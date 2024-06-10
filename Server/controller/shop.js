const Product = require("../models/product");

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

exports.getSingleProduct = (req, res, next) => {
  const productId = req.params.id;
  // console.log(productId);
  Product.findById(productId, (product) => {
    console.log(product);
    res.render("productDetails", {
      product: product,
    });
  });
};
