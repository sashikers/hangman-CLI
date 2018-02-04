var Word = require("./word.js");
var inquirer = require("inquirer");
var wordToGuess = "";

console.log("==================\
	===================================\
	===============================\
	=============================\
	==============================\
	==================================\
	===================================\
	==================\
	=============================\
	====================================\
	==========================\
	========================\
	===================================\
	========================================\
	========================index2.js");

function generateNewWord() {
	console.log("=================generateNewWord=================");
	var words = ["ANCHOR", "ALMANAC", "BAREBOTTLE", "CELLARMAKER", "HARMONIC", "MAGNOLIA", "THIRSTYBEAR", "FORTPOINT","PIZZAPORT","SIERRANEVADA","ROLLINGROCK"];
	var randomIndex = (Math.floor(Math.random() * words.length)) + 1;
	var guessString = words[randomIndex];
	wordToGuess = new Word(guessString);
	// console.log("=================wordToGuess=================", wordToGuess);

	console.log("toString", wordToGuess.lettersObjectArray.toString());
}

function startNewGame() {
	console.log("=================startNewGame=================");
	generateNewWord();
}

startNewGame();