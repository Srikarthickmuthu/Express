const express = require("express");

const app = express();

const fs = require("fs");
app.get("/", (req, res, next) => {
  fs.stat("file.txt", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000);
