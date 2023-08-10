const sequelize = require("../config/abConfig");
const Sequelize = require("sequelize");
const Product = sequelize.define("product", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: Sequelize.FLOAT,
  description: Sequelize.TEXT,
  published: Sequelize.BOOLEAN,
});
module.exports = Product;
