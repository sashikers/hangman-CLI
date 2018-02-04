var Word = require("./word.js");
var inquirer = require("inquirer");

var wordToGuess = "";

function generateNewWord() {
	console.log("==============================================================");
	console.log("==============================================================");
	console.log("==========================New word!===========================");
	console.log("==============================================================");
	console.log("==============================================================");

	var generateNewWord = this;

	var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];
	var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
	var guessString = words[randomIndex];
	var wordToGuess = new Word(guessString);
	var guesses = 0;
	var allGuessedLetters = [];
	// console.log("allGuessedLetters",allGuessedLetters);

	userGuess(wordToGuess, guesses);

}
function userGuess(guessableWord, guesses) {

	
	console.log("==============================================================");
	console.log("==============================================================");
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

			// recursion 
			userGuess(guessableWord, guesses);

			if(guessableWord.guessedWord === true) {
				console.log("guessableWord.guessedWord true");
				generateNewWord();
			} 
		});
	} 
	else {
		console.log("You failed! Try a new game.");
		generateNewWord();
	}
}

generateNewWord();