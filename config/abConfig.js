const Sequelize = require("sequelize");
const sequelize = new Sequelize("project", "root", "goodgirl12345", {
  dialect: "mysql",
  host: "localhost",
});
sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Error" + err));
module.exports = sequelize;
