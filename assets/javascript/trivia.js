	//play NBA theme
	var audio = new Audio('../assets/espnNbaTheme.mp3');
	audio.play();

	//hide properties at the beginning, to display later once button is clicked.
	$('.row').hide();
	$('.results').hide();

	//on click "CLICK TO START TRIVIA GAME" the quiz shows
	$('.btn').on('click', function(){
		$('.jumbotron').hide();
		$('.row').show();
		// $('.submit').show();
		
		//TIMER
		var counter;
	        var number = 100;
	        // $('#stop').on('click', stop);
	       	// $('#resume').on('click', run);
		     function run(){
		     	counter = setInterval(decrement, 1000);
		        }
		     function decrement(){
		     	number--;
		     	$('.timer').html('<h1> The countdown has begun: ' + number + '</h1>');
		     	if (number === 0){
		     		stop();
		     		$('.results').show();
		     		$('.quiz').hide();
		            }
		        }
		        function stop(){
		            clearInterval(counter);
		        }
		        run();
		    //TIMER END

	});

	//on click of the Submit Button call these actions
	$('.submit').on('click', function(gradeTest){
	 	var correctAnswer = 0; 
	 	var incorrect= 0;

		$('.results').show();
		$('.quiz').hide();
		$('.timer').hide();
		$('.submit').hide();


	var answerRight = document.getElementById('q1d').value;
	 //var answerWrong = document.getElementById('q1a', 'q1b','q1c').value;

		   			if(answerRight === '16'){
						correctAnswer++;
		      			$('.results').html('<p> Your score for correct answers is: ' + correctAnswer + '</p>');
		      		}else if (answerRight !== '16') {
		      			incorrect++;
		      			$('.results').html('<p> Your score for incorrect answers is: ' + incorrect + '</p>');	
		      		};
	var answer2 = document.getElementById('q2a').value;
		   			if(answer2 === '2') {
		      			correctAnswer++;
		      			$('.results').html('Your score for correct answers is: ' + correctAnswer);
		      		}
	var answer3 = document.getElementById('q3b').value;
		   			if(answer3 === 'Golden State Warriors') {
		      			correctAnswer++;
		      			$('.results').html('Your score for correct answers is: ' + correctAnswer);
		      		}
	var answer4 = document.getElementById('q4c').value;
		   			if(answer4 === 'Cleveland Cavaliers') {
		      			correctAnswer++;
		      			$('.results').html('Your score for correct answers is: ' + correctAnswer);
		      		}
	var answer5 = document.getElementById('q5a').value;
		   			if(answer5 === '6') {
		      			correctAnswer++;
		      			$('.results').html('Your score for correct answers is: ' + correctAnswer);
		      		}
	var answer6 = document.getElementById('q6d').value;
		   			if(answer6 === 'Golden State Warriors') {
		      			correctAnswer++;
		      			$('.results').html('Your score for correct answers is: ' + correctAnswer);
		      		}
	var answer7 = document.getElementById('q7a').value;
		   			if(answer7 === '30') {
		      			correctAnswer++;
		      			$('.results').html('Your score for correct answers is: ' + correctAnswer);
		      		}


	});
