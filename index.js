var Word = require("./word.js");
var inquirer = require("inquirer");

var guestCount = 0;

// var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];

// var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
// var guessString = words[randomIndex];
// var wordToGuess = new Word(guessString);
// console.log("wordToGuess",wordToGuess);

var wordToGuess = "";

function startNewGame() {

	var startNewGame = this;
	// console.log("startNewGame", startNewGame);

	var guesses = 0;
	var guessedLetters = "";
	var guessedCorrectly = 0;
	console.log("guessedCorrectly", guessedCorrectly);

	var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];
	var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
	var guessString = words[randomIndex];
	wordToGuess = new Word(guessString);
	// console.log("wordToGuess",wordToGuess);

	console.log("==============================================================================================================================================================================================");

	if (guesses < 3) {
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

			console.log("guessedCorrectly", this.guessedCorrectly);

			// recursion 
			userGuess();
		});
	} 
	else {
		console.log("You failed! Try a new game.");
		guesses = 0;
		console.log("guesses", guesses);

	}	
}


function userGuess() {
	var thisUserGuess = this;
	// console.log("==============================================================================================================================================================================================", thisUserGuess);
	
	wordToGuess.showWord();

	console.log("startNewGame.guesses", startNewGame.guesses);

	if (startNewGame.guesses < 3) {
		
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

			console.log("guessedCorrectly", this.guessedCorrectly);

			// recursion 
			userGuess();
		});
	} 
	else {
		console.log("You failed! Try a new game.");
		guesses = 0;
		console.log("guesses", guesses);

	}
}

startNewGame();
// userGuess();