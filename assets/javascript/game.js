

		var arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		
		var win = 0;
		var lose = 0;
		var guesses = 9;
		var guessesLeft = 9;
		var lettersGuessed = [];

		var guessesLeft;
		var compGuess;

		initializeValues();
		displayScore();

		function initializeValues(){
			guessesLeft = 9;
			compGuess = arr1[Math.floor(Math.random() * arr1.length)];
			lettersGuessed = [];
		}

		function displayScore(){
			// document.getElementById("score").innerHTML = "<h1>wins:" + win + "</h1>" + " <h1>losses: " + lose + " </h1> " + "<h1>Guesses Left" + guessLeft;
			var html = "<p> wins:" + win + "</p>" + 
						"<p> losses:" + lose + "</p>" + 
						"<p> guessesLeft:" + guessesLeft + "</p>" + 
						"<p> lettersGuessed:" + lettersGuessed + "</p>" ;

			document.querySelector("#score").innerHTML = html;
		}

		document.onkeyup = function(event){
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			lettersGuessed.push(userGuess);
			guessesLeft--;

			if(userGuess === compGuess){
					win++;
					initializeValues();
			}
			
			if(guessesLeft == 0){
				lose++;
				initializeValues();
			}
			displayScore();
			
		}

		


