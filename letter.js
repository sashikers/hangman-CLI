var inquirer = require("inquirer");

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

	this.checkLetter = function() {
		inquirer.prompt([
			{
				type: "input",
				name: "letterGuess",
				message: "Guess a letter!",
			}
		]).
		then(function(guess) {
			if (guess.letterGuess === letter) {
				console.log("Wow! Great guess!");
				guessed = true;
				// console.log("guessed", guessed);
			}
			else {
				console.log("Guess again...");
				// console.log("guessed", guessed);
			}
		})
	};
}

// var a = new Letter("a");
// console.log("a", a);
// console.log("a.displayLetter()", a.displayLetter());

// a.checkLetter();