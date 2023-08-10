const sequelize = require("../config/abConfig");
const Sequelize = require("sequelize");
const Review = sequelize.define("review", {
  rating: Sequelize.INTEGER,
  description: Sequelize.TEXT,
});
module.exports = Review;
