const products = [];
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body.title)
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop page",
    path: "/",
    hasProducts: products.lenghth > 0,
    activeShop: true,
  });
};
