const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT;
const productsRouter = require("./src/views/router/productsRouter");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "Onwanya",
    customer: ["Doja", "Harry", "Lisa"],
  });
});

app.listen(PORT, () => {
  debug("Listening on port " + chalk.green(" : " + PORT));
});

module.exports = app;
