//this file offers a set of routes for displaying and saving data to the questions in db
//require dependencies

var Question = require("../models/questions")

// Event Routes
module.exports = function (app) {

	// POST route for saving a new answer 
	app.post("/questions", function (req, res) {
		
    Question.create({
		number: req.body.number,
		answer: req.body.answer
    }).then(function (dbQuestions) {
			res.json(dbQuestions);
		});
	});

};



