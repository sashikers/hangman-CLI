var Word = require("./word.js");
var inquirer = require("inquirer");

var words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear", "FortPoint"];

var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
var wordToGuess = new Word(words[randomIndex]);
console.log("wordToGuess",wordToGuess);

var count = 0;
var userGuess = function(){
	if (count < 3) {
		console.log("New word!");
		inquirer.prompt([
			{
				name: "guess",
				message: "Guess a letter!"
			}
		])
		.then(function(answer) {
			console.log("answer", answer);
			// wordToGuess.showWord();
			count++;
			userGuess();
		});
	} 
	else {
		console.log("else");
	}
}

userGuess();