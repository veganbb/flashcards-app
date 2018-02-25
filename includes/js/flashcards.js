var initFlashcards = function(){
	$('.flashcard-option').on('click',function(){
		if (!$('body').hasClass('transitioning')){
			$('body').addClass('transitioning')
			
			switch($(this).attr('data-option')){
				case ('all-cards'):
					startAllFlashcards();
					break;
				case ('known'):
					startKnownFlashcards();
					break;
					
				case ('unknown'):
					startUnknownFlashcards();
					break;
			}
			$('.' + $(this).attr('data-option')).slideDown();
			
			setTimeout(function(){
				$('body').removeClass('transitioning')
			},700)
		}
	});
	
	
	// in-card controls - will be used later, but good to setup listeners here
	$('.card-front').on('click',function(){
		$('.flip-container').toggleClass('hover');
	});
	
	$('.back-side-footer-bottom p').on('click',function(){
		var answer = $(this).attr('data-known');
		localStorage.setItem(questionsOrder[(questionsShown-1)], answer);
		$('.flashcards-game .card-front-content > span > span').text( "" )
		$('.flip-container').toggleClass('hover');
		window.ga.trackEvent('Flashcard', 'Answer', 'Answered A Question', 1)
		nextQuestion();
	});
}







var shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}







var nextQuestion = function(){
	questionsShown++;
	if (questionsShown > questionsOrder.length){
		$('.flashcards-game .card-front-content > span > span').text('There are no more questions, press the "BACK" button to start over');
		$('.flip-over').hide();
		return;
	} else {
		$('.flip-over').show();	
	}

	$('.flashcards-game .card-front-content  > span > span').text( question[questionsOrder[(questionsShown-1)]] )
	setTimeout(function(){
		$('.flashcards-game .back-side-content').html( '<h2>' + question[questionsOrder[(questionsShown-1)]] + '</h2><p>' + answer[questionsOrder[(questionsShown-1)]] + '</p>' )
	},300);
	/*setTimeout(function(){
		winh = $(window).height();
		if ( $('.flashcards-game .card-front-content  > span > span').height > (winh *.84) ){ //it overflows
			$('.flashcards-game .card-front-content  > span').css('overflow-y','scroll');
		} else { // no overflow
			$('.flashcards-game .card-front-content  > span').css('overflow-y','auto');
		}
	},1)*/
}







var startAllFlashcards = function(){
	var questionsOrder = new Array()
	window.questionsOrder = questionsOrder;
	window.questionsShown = 0;
	$(question).each(function( index ) {
		if ( question[index] ){
			questionsOrder.push(index);
		}
	});
	questionsOrder = shuffle(questionsOrder);
	$('.flashcards-game').slideDown()
	nextQuestion();
}







var startKnownFlashcards = function(){
	var questionsOrder = new Array()
	window.questionsOrder = questionsOrder;
	window.questionsShown = 0;
	$(question).each(function( index ) {
		if ( question[index] ){
			if (localStorage.getItem(index) == 1) {
				questionsOrder.push(index);
			}
		}
	});
	questionsOrder = shuffle(questionsOrder);
	$('.flashcards-game').slideDown()
	nextQuestion();
}







var startUnknownFlashcards = function(){
	var questionsOrder = new Array()
	window.questionsOrder = questionsOrder;
	window.questionsShown = 0;
	$(question).each(function( index ) {
		if ( question[index] ){
			if (localStorage.getItem(index) == 0) {
				questionsOrder.push(index);
			}
		}
	});
	questionsOrder = shuffle(questionsOrder);
	$('.flashcards-game').slideDown()
	nextQuestion();
}
