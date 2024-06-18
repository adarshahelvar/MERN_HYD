const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.find().then((products) => {
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
  Product.findById(productId).then((product) => {
    res.render("productDetails", {
      product: product,
    });
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  // console.log(productId);
  Product.findById(productId, (product) => {
    Cart.addProduct(productId);
  });
  res.redirect("/");
};
