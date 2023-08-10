const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./config/abConfig");
const productRouter = require("./routes/productRoutes");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
//middleware
app.use(express.urlencoded({ extended: true }));

//routers

app.use("/contactUs", (req, res) => {
  res.render("contactUs", {
    pageTitle: "Contact Us",
  });
});
app.use("/products", productRouter);
app.use("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home Page",
  });
});
//port
sequelize
  .sync({ force: false })
  .then(() =>
    app.listen(3000, () => {
      console.log("Server is running on 3000");
    })
  )
  .catch((err) => console.log("Error" + err));
