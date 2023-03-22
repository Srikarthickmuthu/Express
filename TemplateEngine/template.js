const express = require("express");

const app = express();
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("template", {
    title: "Template Engine",
    message:
      "This is the example for template engine here we are using pug as template engine",
  });
});

app.listen(3000);
