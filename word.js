// imports the Letter file
var Letter = require("./letter.js");

// takes a word as the input
var Word = function(word) {

	this.guessedWord = false; 

	// splits the input word into. individual letters
	var lettersStringArray = word.split("");
	// creates a blank array for the letter Objects
	this.lettersObjectArray = [];

	// iterates through the string array and creates new Letter objects per letter in the word
	for (var i = 0; i < lettersStringArray.length; i++) {
		this.lettersObjectArray.push(new Letter(lettersStringArray[i]));
	}

	this.showWord = function(){
		var displayedWord = "";

		this.lettersGuessedCorrectly = 0;
		
		
		for (var j = 0; j < this.lettersObjectArray.length; j++) {
			displayedWord += this.lettersObjectArray[j].displayLetter();

			var wordLength = this.lettersObjectArray.length;

			if (this.lettersObjectArray[j].guessed === true) {
				this.lettersGuessedCorrectly += 1;
			}


			if (this.lettersGuessedCorrectly === wordLength) {
				console.log("youwin");
				this.guessedWord = true;
			}
		}

		console.log(displayedWord, "<< Try to figure out the brewery!");
	}

	this.checkCharacter = function(inputCharacter) {
		for (var k = 0; k < this.lettersObjectArray.length; k++) {
			this.lettersObjectArray[k].checkLetter(inputCharacter);
		}
	}
}

module.exports = Word;