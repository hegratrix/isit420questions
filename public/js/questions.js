//add answers to database
function GatherAnswers() {
	event.preventDefault();
	console.log ('yay')
	for (let i=1; i<421; i++) {
		if (i===10) {
			var newAnswer = {
			    number :i,
				answer : $("input[name='shirtCannon']:checked"). val(),
			}
		} else if (i===60){
		    var newAnswer = {
				number :i,
				answer : $("input[name='amOrPm']:checked"). val(),
			}
	    } else {
		    var newAnswer = {
			    number :i,
				answer : $('#answer'+i).val(),
		    }
	    }
		$.post(`/questions`, newAnswer)
	};
};
