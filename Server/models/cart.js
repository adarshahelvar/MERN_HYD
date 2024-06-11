const fs = require("fs");
const path = require("path");

const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Cart {
  static addProduct(id) {
    // Fetch old cart data
    fs.readFile(dataPath, (err, data) => {
      let cart = { products: [] };
      if (!err) {
        cart = JSON.parse(data);
      }
      const exitstingProductIndex = cart.products.findIndex((p) => p.id === id);
      const existingProduct = cart.products[exitstingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1; 
        cart.products = [...cart.products]; 
        cart.products[exitstingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 }; //Task=> you add title as well.
        cart.products = [...cart.products, updatedProduct];
      }
      fs.writeFile(dataPath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
