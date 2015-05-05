//TODO ADD CALCULATIONARISM FOR THIS TIME AND PASS SHIT TO THE PYTHON FOR BIG CALCULATIONALISTISM

function Game(json) {
	var sentence = json.sentence; //The sentence we're trying to guess.
	var done = false;       //true iff we've guessed the whole sentence
	var index = 0;  //the index in sentence that we're focusing on
	var capsConst = (int)('A' - 'a');       //constant used to make the sentence uniform case for guessing purposes
	var displayString = "";        //the portion of the sentence that we "know" and are going to display
	var guessChar : char;   //the current guess being processed (given by user)
	var answer : char;      //the correct guess
	var validinput = false; //used to discard weird input like !#@%!@#$^!@#!$@#$!@# or numbers
	var guessArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];       //guessArray[i] is the number of times it's taken us i+1 guesses to get the answer (in this run of the game)
	var numTries = 0;       //the number of tries we're on currently
        var nextChar : char;    //the character we're considering
        var charInt : int;      //the integer of the character we're considering
	while (!done) {
    	    // the next character that's up for guessing
    	    nextChar = sentence.charAt(index);
    	    charInt = (int)nextChar;
    	    // detect whether the next character is a letter or not (condition fails if we have a letter)
    	    while ((charInt < 65 && charInt != 32) || charInt > 122 || (charInt > 90 && charInt < 97)) {
    		displayString += nextChar;      //adds the (punctuation) character to the display string
    		index++;                        //go to next index in source string
    		nextChar = sentence.charAt(index);      //update nextChar
    		charInt = (int)nextChar;                //and charInt
    	    }
    	    // if the next letter is uppercase, 
    	    if (nextChar >= 97) {
    		answer = nextChar - capsConst;  //change target character to lowercase (to streamline guessing)
	    }
            while (!doneGuessing) {
		while (!validinput) {
		    guessChar = getChar()//add keypress event here
		    // same input detection as above
		    // if they press something weird we ignore it and keep checking for valid guesses
		    if ((guessChar < 65 && guessChar != 32) || guessChar > 122 || (guessChar > 90 && guessChar < 97)) {
			//do nothing and keep checking for better input
		    }
		    else {
			validinput = true;      //break out of while loop and process this (valid) guess
		    }
		}
		// now guessChar is a valid letter (or space), so we check if it's right
		if (guessChar == answer) {      //If the guess is correct
		    guessArray[numTries]++;     //Increment the number of times we got the right answer in {numTries} guesses
                    displayString += nextChar;  //Add the character we found to the display string
                    index++;                    //update index
                    numTries = 1;               //reset numTries
                    doneGuessing = true;        //we're done guessing this character, go back to top of while loop
		}
                else {
                    numTries++; //increment numTries because we tried again (and, sadly, failed)
                }
            }
            if (index >= sentence.length) {
                done = true;    //we're done someone won! yay!
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
