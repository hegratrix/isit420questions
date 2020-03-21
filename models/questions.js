// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Answer = sequelize.define(`questions`, {
  number: Sequelize.INTEGER,
  answer: Sequelize.STRING
})

// Syncs with DB
Answer.sync();

// Makes the Answer Model available for other files (will also create a table)
module.exports = Answer;
