var startScreen = function(){
	$('.option').on('click',function(){
		if (!$('body').hasClass('transitioning')){
			$('body').addClass('transitioning')
			
			$('.' + $(this).attr('data-option')).slideDown();
			$('.' + $(this).attr('data-option')).addClass('shown');

			if ($(this).attr('data-option') == 'flashcards'){
				initQuestionHistory();
			}
			
			setTimeout(function(){
				$('body').removeClass('transitioning')
			},700)
		}
	});
}
