const express = require("express");

const app = express();

app
  .route("/user")
  .get((req, res) => {
    res.send("user logged in");
  })
  .post((req, res) => {
    res.send("user added the product");
  })
  .put((req, res) => {
    res.send("user updated the details");
  });

app.listen(3000);
