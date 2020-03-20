var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("ci3f45p9_420Questions", "ci3f45p9_420", "420Questions", {
  host: "cns59.hostgator.com",
  port: 3306,
  dialect: "mysql",
});

// Exports the connection for other files to use
module.exports = sequelize;