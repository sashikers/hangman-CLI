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
}

var example = new Word("butts");
console.log("example", example);

module.exports = Word;