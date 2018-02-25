var initSearch = function(){
	$('#search').on('keyup',function(){
		var currentQuery = $(this).val();
		if (currentQuery == ''){
			$('.search-results').slideUp();
			return;
		}
		var releventQuestions = new Array();
		
		currentQueryArray = currentQuery.split(" ");
		$.each(currentQueryArray,function(key,value){
			$(question).each(function( index ) {
				if ( question[index] ){
					if (question[index].indexOf(value) !=-1) {
						releventQuestions.push(index);
					} else if (answer[index].indexOf(value) !=-1) {
						releventQuestions.push(index);
					} else if (category[index].indexOf(value) !=-1) {
						releventQuestions.push(index);
					}
				}
			});
		})
		
		$('.search-results').slideDown();
		// write html here!!
		var existingQuestions = "";
		$.each(releventQuestions, function(key,value){
			existingQuestions += "<li data-question='" + value + "'>" + question[value] + "</li>";
		});
		$('.search-results-content').html("<ul>" + existingQuestions + "</ul>")
		// end writing html
		
		$('.search-results-content').on('click','li',function(){
			console.log('CLICKED');
			var currentQuestion = $(this).attr('data-question');
			$('.search-results-details-content').html("<h2>" + question[currentQuestion] + "</h2><p>" + answer[currentQuestion] + "</p>")
			$('.search-results-details').slideDown()
		});
		
	})
	
}



