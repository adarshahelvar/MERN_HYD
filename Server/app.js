const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Hello from ExpressJS");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware function");
  res.send("<h1>Hello from Express Server</h1>");
});

app.listen(3000);
