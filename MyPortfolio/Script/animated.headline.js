jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing modifiedWord
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var modifiedWord = $(this),
				letters = modifiedWord.text().split(''),
				selected = modifiedWord.hasClass('is-visible');
			for (i in letters) {
				if(modifiedWord.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    modifiedWord.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest modifiedWord
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($modifiedWord) {
		var nextWord = takeNext($modifiedWord);
		
		if($modifiedWord.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $modifiedWord.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$modifiedWord.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($modifiedWord.parents('.cd-headline').hasClass('letters')) {
			var bool = ($modifiedWord.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($modifiedWord.find('i').eq(0), $modifiedWord, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($modifiedWord.parents('.cd-headline').hasClass('clip')) {
			$modifiedWord.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($modifiedWord, nextWord);
				showWord(nextWord);
			});

		} else if ($modifiedWord.parents('.cd-headline').hasClass('loading-bar')){
			$modifiedWord.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($modifiedWord, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $modifiedWord.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($modifiedWord, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($modifiedWord, $duration) {
		if($modifiedWord.parents('.cd-headline').hasClass('type')) {
			showLetter($modifiedWord.find('i').eq(0), $modifiedWord, false, $duration);
			$modifiedWord.addClass('is-visible').removeClass('is-hidden');

		}  else if($modifiedWord.parents('.cd-headline').hasClass('clip')) {
			$modifiedWord.parents('.cd-words-wrapper').animate({ 'width' : $modifiedWord.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($modifiedWord) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $modifiedWord, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $modifiedWord, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($modifiedWord)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($modifiedWord);
			switchWord($modifiedWord, nextWord);
		} 
	}

	function showLetter($letter, $modifiedWord, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $modifiedWord, $bool, $duration); }, $duration); 
		} else { 
			if($modifiedWord.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $modifiedWord.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($modifiedWord) }, animationDelay) }
		}
	}

	function takeNext($modifiedWord) {
		return (!$modifiedWord.is(':last-child')) ? $modifiedWord.next() : $modifiedWord.parent().children().eq(0);
	}

	function takePrev($modifiedWord) {
		return (!$modifiedWord.is(':first-child')) ? $modifiedWord.prev() : $modifiedWord.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});