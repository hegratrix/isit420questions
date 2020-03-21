var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("aab6i3mobgzxgq6z", "dpzsrxlv12rzq2jy", "izwsacrsxsbqjghb", {
  host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
});

// Exports the connection for other files to use
module.exports = sequelize;