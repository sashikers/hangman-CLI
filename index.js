var Word = require("./word.js");
var inquirer = require("inquirer");

var words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear", "FortPoint"];

var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
var guessString = words[randomIndex];
var wordToGuess = new Word(guessString);
console.log("wordToGuess",wordToGuess);

var count = 0;
var userGuess = function(){
	console.log("New word!");
	wordToGuess.showWord();
	if (count < 3) {
		
		inquirer.prompt([
			{
				name: "guess",
				message: "Guess a letter!"
			}
		])
		.then(function(answer) {
			console.log("answer", answer);
			wordToGuess.checkCharacter(answer.guess);
			count++;

			// recursion 
			userGuess();
		});
	} 
	else {
		console.log("You failed! Try a new game.");
	}
}

userGuess();