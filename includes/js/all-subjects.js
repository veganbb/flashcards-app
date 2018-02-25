var displayAllSubjects = function(){
	var existingQuestions = "";
	$(question).each(function( index ) {
		if ( question[index] ){
			existingQuestions += "<li data-question='" + index + "'>" + question[index] + "</li>";
		}
	});
	$('.all-content').html("<ul>" + existingQuestions + "</ul>")
	
	$('.all-content li').on('click',function(){
		var currentQuestion = $(this).attr('data-question');
		$('.all-details-content').html("<h2>" + question[currentQuestion] + "</h2><p>" + answer[currentQuestion] + "</p>")
		$('.all-details').slideDown()
	})
}
