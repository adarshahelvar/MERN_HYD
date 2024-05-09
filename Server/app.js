const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  // console.log("Second middleware function");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Hello from ExpressJS");
  res.send("<h1>Hello from Express</h1>");
  // next();
});

app.listen(3000);
