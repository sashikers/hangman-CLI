// imports the Letter file
var Letter = require("./letter.js");

// takes a word as the input
var Word = function(word) {

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
		console.log("this.showWord is running:");
		var displayedWord = "";
		for (var j = 0; j < this.lettersObjectArray.length; j++) {
			displayedWord += this.lettersObjectArray[j].displayLetter();
		}

		console.log(displayedWord, "displayedWord");
	}

	this.checkCharacter = function(inputCharacter) {
		console.log("this.checkCharacter is running:");
		for (var k = 0; k < this.lettersObjectArray.length; k++) {
			this.lettersObjectArray[k].checkLetter(inputCharacter);
			console.log("this.lettersObjectArray", this.lettersObjectArray);
		}
	}
}

var example = new Word("butts");
console.log("======================");
// example.showWord();
// console.log(example.showWord());
// console.log("example", example);
console.log("======================");
example.checkCharacter("b");
example.showWord();

module.exports = Word;