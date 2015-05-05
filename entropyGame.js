//TODO ADD CALCULATIONARISM FOR THIS TIME AND PASS SHIT TO THE PYTHON FOR BIG CALCULATIONALISTISM

$(document).keypress(function(event) {
    guessChar = event.key;
    if (done) {
        return;
    }
    if (doneGuessing) {
        getNextChar();
        doneGuessing = false;
    }
    if (!done && guessing) {
        processGuess();
    }
});

function processGuess() {
    if ((guessChar < 'A' && guessChar != ' ') || guessChar > 'z' || (guessChar > 'Z' && guessChar < 'a')) {
        return; // do nothing and wait for real input that doesn't suck
    }
    if (guessChar == answer) {
        guessArry[numTries]++;
        displayString += nextChar;
        console.log(displayString);
        document.getElementById("StringDisplay").innerHTML = displayString;
        index++;
        numTries = 1;
        doneGuessing = true;
        guessing = false;
    }
    else {
        numTries++;
    }
    if (index >= sentence.length()) {
        done = true;
        calculateEntropy();
        return;
    }
}

function getNextChar() {
    nextChar = sentence.charAt(index);
    charInt = nextChar; 
    while ((guessChar < 'A' && guessChar != ' ') || guessChar > 'z' || (guessChar > 'Z' && guessChar < 'a')) {
        displayString = displayString + nextChar;
        document.getElementById("StringDisplay").innerHTML = displayString;
        index++;
        if (index >= sentence.length()) {
            done =true;
            calculateEntropy();
            return;
        }
        nextChar = sentence.charAt(index);
    }
    if (nextChar >= 97) {
        answer = nextChar - capsConst;
    }   
}

function calculateEntropy() {
    return;
}
