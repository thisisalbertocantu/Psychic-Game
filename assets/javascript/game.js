// Creates an array that lists out all of the letter options
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesleft = 10;
var guesses = wins + losses;


// Create variables that hold references to the places in the HTML where we want to display things.

var guessText = document.getElementById("guess-text");
var userchoiceText = document.getElementById("userchoice-text");
var computerchoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var guessesleft = document.getElementById("guessesleft-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.

document.onkeyup = function (event) {

    // Determines which key was pressed.
            var userGuess = event.key;
            
    // The computer needs to choose a letter randomly
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            if (userGuess === computerGuess) {
                wins++, guesses++, guessesleft--;                    
            } else {
                losses++, guesses++, guessesleft--;
            }


            // Display the user and computer guesses, and wins/losses/ties.
            guessText.textContent = "You chose:" + userGuess;
            computerchoiceText.textContent = "The computer chose: " + computerGuess;
            winsText.textContent = "wins: " + wins;
            losesText.textContent = "losses: " + losses;
            guessesleft.textContent = "Guesses left: " + guessesleft;
            guessesText.textContent = "You have guessed: " + guesses + " times";
            

}               