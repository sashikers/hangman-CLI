// imports the Letter file
var Letter = require("./letter.js");

// takes a word as the input
var Word = function(word) {

	this.guessedWord = false; 

	// this.lettersGuessedCorrectly = 0;
	// console.log("=================lettersGuessedCorrectly",this.lettersGuessedCorrectly);

	// splits the input word into. individual letters
	var lettersStringArray = word.split("");
	// creates a blank array for the letter Objects
	this.lettersObjectArray = [];

	// iterates through the string array and creates new Letter objects per letter in the word
	for (var i = 0; i < lettersStringArray.length; i++) {
		this.lettersObjectArray.push(new Letter(lettersStringArray[i]));
	}

	// console.log("lettersObjectArray[0]",this.lettersObjectArray[0]);

	this.showWord = function(){
		// console.log("this.showWord is running:");
		var displayedWord = "";

		this.lettersGuessedCorrectly = 0;
		
		
		for (var j = 0; j < this.lettersObjectArray.length; j++) {
			displayedWord += this.lettersObjectArray[j].displayLetter();

			var wordLength = this.lettersObjectArray.length;
			// console.log("wordLength", wordLength);



			// console.log("this.lettersObjectArray.length",this.lettersObjectArray.length);


			// console.log(this.lettersObjectArray[j].guessed);

			if (this.lettersObjectArray[j].guessed === true) {
				this.lettersGuessedCorrectly += 1;
				// console.log("wordLength", wordLength);
				// console.log("=================lettersGuessedCorrectly",this.lettersGuessedCorrectly);
				// console.log("lettersObjectArray.length",this.lettersObjectArray.length);
			}


			if (this.lettersGuessedCorrectly === wordLength) {
				console.log("youwin");
				this.guessedWord = true;
			}
			else {
				// console.log("guessagain");
			}

			
			// if(this.lettersObjectArray[j].displayLetter() === true) {
			// 	console.log("good");
			// }
			// else {
			// 	console.log("bad");
			// }
		}

		console.log(displayedWord, "<< Try to figure out the brewery!");
		// console.log("Letters guessed correctly: ", this.lettersGuessedCorrectly);
	}

	this.checkCharacter = function(inputCharacter) {
		// console.log("this.checkCharacter is running:");
		for (var k = 0; k < this.lettersObjectArray.length; k++) {
			this.lettersObjectArray[k].checkLetter(inputCharacter);
			// this.lettersGuessedCorrectly += 1;

			// console.log("=================lettersGuessedCorrectly", this.lettersGuessedCorrectly);
			// console.log("this.lettersObjectArray", this.lettersObjectArray);
		}
	}
}

// var example = new Word("butts");
// console.log("======================");
// // example.showWord();
// // console.log(example.showWord());
// // console.log("example", example);
// console.log("======================");
// example.checkCharacter("b");
// example.showWord();

module.exports = Word;