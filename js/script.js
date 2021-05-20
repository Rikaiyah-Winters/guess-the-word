//creating variables that link js to html
const guessedLettersElement = document.querySelector(".guessed-letters"); 
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again")

//starter word
const word = "magnolia";
const guessedLetters = [];

//displays dots as placeholders for chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("·");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    //make sure it's a single letter
    const goodGuess = validateInput(guess);
    
    if (goodGuess) {
        makeGuess(guess);
    }

    letterInput.value = "";
    //logging the single letter that was imput
    //console.log(goodGuess);
    
});

//This function's purpose is to validate the player's input.
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) { 
        //Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.lenth > 1) { 
        //Did you type in more than 1 letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        //Did you type a number, a special character or some other non letter?
        message.innerText = "Please enter a letter from A to Z.";
    } else { 
        //We finally got a single letter
        return input;
    }
};

//this function capures input
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    };