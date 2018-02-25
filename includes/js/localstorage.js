var initLocalStorage = function(){
	$(question).each(function( index ) {
		if ( question[index] ){
			if (localStorage.getItem(index) === null) {
				localStorage.setItem(index, '0');
			}
		}
	});
}


var resetLocalStorage = function(){
	$(question).each(function( index ) {
		if ( question[index] ){
			localStorage.setItem(index, '0');
		}
	});
}



var initQuestionHistory = function(){
	
	var knownQuestions = new Array();
	var unknownQuestions = new Array();
	var totalQuestions = new Array();
	window.knownQuestions = knownQuestions;
	window.unknownQuestions = unknownQuestions;
	window.totalQuestions = totalQuestions;
	
	$(question).each(function( index ) {
		if ( question[index] ){
			if (localStorage.getItem(index) == 0) {
				unknownQuestions.push(index)
			} else {
				knownQuestions.push(index)
			}
			totalQuestions.push(index)
		}
	});

	$('.unknown-count').text("(" + unknownQuestions.length + " of " + totalQuestions.length + ")");
	$('.known-count').text("(" + knownQuestions.length + " of " + totalQuestions.length + ")");
}