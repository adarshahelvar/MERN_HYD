const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const product = new Product({ title: title });
  product
    .save()
    .then((result) => {
      console.log("Products created successfully...");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
