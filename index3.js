var Word = require("./word.js");
var inquirer = require("inquirer");

var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];

function generateNewWord() {
	console.log("=================generateNewWord=================");
	var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];
	var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
	var guessString = words[randomIndex];
	wordToGuess = new Word(guessString);
	// console.log("=================wordToGuess=================", wordToGuess);

	// console.log("toString", wordToGuess.lettersObjectArray.toString());
}

var guesses = 0;
var guessedLetters = "";
// var guessedCorrectly = 0;
// console.log("guessedCorrectly", guessedCorrectly);

// console.log("New word!");

var userGuess = function(){
	var thisUserGuess = this;
	// console.log("==============================================================================================================================================================================================", thisUserGuess);
	
	wordToGuess.showWord();

	if (guesses < 10) {
		
		inquirer.prompt([
			{
				name: "guess",
				message: "Guess a letter!"
			}
		])
		.then(function(answer) {
			console.log("answer", answer);
			wordToGuess.checkCharacter(answer.guess.toUpperCase());
			guessedLetters += answer.guess;
			guessedLetters += " ";
			console.log("guessedLetters", guessedLetters.toUpperCase());
			guesses++;

			// console.log("guessedCorrectly", this.guessedCorrectly);

			// recursion 
			userGuess();


			if(wordToGuess.guessedWord === true) {
				console.log("wordToGuess.guessedWord true");
				// break;
				
			} else {
				console.log("wordToGuess.guessedWord false");
			}
		});
	} 
	else {
		console.log("You failed! Try a new game.");
	}
}

userGuess();