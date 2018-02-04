var Word = require("./word.js");
var inquirer = require("inquirer");

// var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];
var wordToGuess = "";

function generateNewWord() {
	console.log("======================================");
	console.log("======================================");
	console.log("==============New word!===============");
	console.log("======================================");
	console.log("======================================");

	var generateNewWord = this;

	// console.log("=================generateNewWord=================");
	var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];
	var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
	var guessString = words[randomIndex];
	var wordToGuess = new Word(guessString);
	var guesses = 0;

	// console.log("=================wordToGuess=================", wordToGuess);

	userGuess(wordToGuess, guesses);
}

// var guessedCorrectly = 0;
// console.log("guessedCorrectly", guessedCorrectly);

// console.log("New word!");

function userGuess(guessableWord, guesses) {
	var thisUserGuess = this;
	// console.log("==============================================================================================================================================================================================", thisUserGuess);
	
	// console.log("guessableWord", guessableWord);
	console.log("Guesses left: ", 10 - guesses);

	var guessedLetters = "";
	guessableWord.showWord();

	if (guesses < 10) {
		
		inquirer.prompt([
			{
				name: "guess",
				message: "Guess a letter!"
			}
		])
		.then(function(answer) {
			console.log("answer", answer);
			guessableWord.checkCharacter(answer.guess.toUpperCase());
			guessedLetters += answer.guess;
			guessedLetters += " ";
			console.log("guessedLetters", guessedLetters.toUpperCase());
			guesses++;

			// console.log("guessedCorrectly", this.guessedCorrectly);

			// recursion 
			userGuess(guessableWord, guesses);


			if(guessableWord.guessedWord === true) {
				console.log("guessableWord.guessedWord true");
				generateNewWord();
				// break;

			} 
			// else {
			// 	console.log("guessableWord.guessedWord false");
			// }
		});
	} 
	else {
		console.log("You failed! Try a new game.");
		generateNewWord();
	}
}

generateNewWord();
// userGuess();