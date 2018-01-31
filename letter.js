console.log("letter.js");

var Letter = function(letter, guessed = false) {
	this.letter = letter; 
	this.guessed = guessed;

	this.displayLetter = function() {
		if (this.guessed) {
			return this.letter; 
		}
		else {
			return " - ";
		}
	};

	this.checkLetter = function(guess) {
		if (guess === letter) {
			console.log("Wow! Great guess!");
			this.guessed = true;
			// console.log("guessed", guessed);
		}
		else {
			// console.log("Guess again...");
			// console.log("guessed", guessed);
		}
	}
	};	

	// this.checkLetter = function() {
	// 	inquirer.prompt([
	// 		{
	// 			type: "input",
	// 			name: "letterGuess",
	// 			message: "Guess a letter!",
	// 		}
	// 	]).
	// 	then(function(guess) {
	// 		if (guess.letterGuess === letter) {
	// 			console.log("Wow! Great guess!");
	// 			guessed = true;
	// 			// console.log("guessed", guessed);
	// 		}
	// 		else {
	// 			console.log("Guess again...");
	// 			// console.log("guessed", guessed);
	// 		}
	// 	})
	// };


console.log("letter.js end");

module.exports = Letter;

// var a = new Letter("a");
// console.log("a", a);
// console.log("a.displayLetter()", a.displayLetter());

// a.checkLetter();