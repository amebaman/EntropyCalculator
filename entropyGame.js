function Game(json) {
	var sentence : String = json.sentence;
	var done = false;
	var index = 0;
	var capsConst = (int)('A' - 'a');
	var displayString : String = "";
	var guessChar : char;
	var answer : char;
	var validinput = false;
	var guessArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var numTries = 0;
	while (!done) {
		// the next character that's up for guessing
		var nextChar = sentence.charAt(index);
		var charInt = (int)nextChar;
		// detect whether the next character is a letter or not (condition fails if we have a letter)
		while ((charInt < 65 && charInt != 32) || charInt > 122 || (charInt > 90 && charInt < 97)) {
			displayString += nextChar;
			index++;
			nextChar = sentence.charAt(index);
			charInt = (int)nextChar;
		}
			// if the next letter is uppercase, 
			if (nextChar >= 97) {
				answer = nextChar - capsConst;
			}
			while (!validinput) {
				guessChar = getChar()//add keypress event here
				// same input detection as above
				// if they press something weird we ignore it and keep checking for valid guesses
				if ((guessChar < 65 && guessChar != 32) || guessChar > 122 || (guessChar > 90 && guessChar < 97)) {
					//do nothing
				}
				else {
					validinput = true;
				}
			}
			// now guessChar is a valid letter (or space), so we check if it's right
			if (guessChar == answer) {
				guessArray[guessChar - 'a'] += numTries;
			}
	}
}

function getChar(event) {
	if (event.which == null) {
		return String.fromCharCode(event.keyCode) // IE
	} else if (event.which!=0 && event.charCode!=0) {
		return String.fromCharCode(event.which)   // the rest
	} else {
		return null // special key
	}
}
