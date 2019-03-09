// Creates an array that lists out all of the letter options
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessleft = 10;
var guesses = wins + losses;
var guessArray = []


// Create variables that hold references to the places in the HTML where we want to display things.

var guessText = document.getElementById("guess-text");
var severalguessText = document.getElementById("severalguess-text")
var userchoiceText = document.getElementById("userchoice-text");
var computerchoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var guessleftText = document.getElementById("guessleft-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.

document.onkeyup = function (event) {

    // Determines which key was pressed.
            var userGuess = event.key;
            guessArray.push(userGuess);
                           
            
    // The computer needs to choose a letter randomly
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            if (userGuess === computerGuess) {
                wins++; 
                guesses++; 
                          
            } else {
                losses++; 
                guesses++; 
                guessleft--;
            
                if (guessleft === 0) {
                    wins = 0;
                    losses = 0;
                    guessleft = 10;
                    guesses = 0;
                    guessArray = [];
                }  
            }


            // Display the user and computer guesses, and wins/losses
            guessText.textContent = "You chose:" + userGuess;
            severalguessText.textContent = "You have chosen: [ " + guessArray + " ]";
            computerchoiceText.textContent = "The computer chose: " + computerGuess;
            winsText.textContent = "wins: " + wins;
            losesText.textContent = "losses: " + losses;
            guessleftText.textContent = "Guesses left: " + guessleft;
            guessesText.textContent = "You have guessed: " + guesses + " times";
            

}               