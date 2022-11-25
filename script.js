


/*
Instructions
The completed application should meet the following criteria:

As a user, I want to play Rock, Paper, Scissors against an automated opponent.

As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

As a user, I expect the computer to choose R, P, or S in return.

As a user, I want the option to play again whether I win or lose.

As a user, I want to see my total wins, ties, and losses after each round.

Specifications
Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.

The computer's selection must be random to ensure a fair game.
*/

// use for generating computer choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var choice = ["R", "P", "S"]
var playerChoice = ''
var computerChoice = ''

// var stats = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
// }

var playAgain = false

var wins = 0
var losses = 0
var ties = 0


function playGame() {
    // prompt user for input and store that input
    playerChoice = prompt('Enter R, P, or S:')

    // generate computer input
    computerChoice = choice[getRandomInt(3)] 

    

    alert("You chose " + playerChoice)
    alert("Computer chose " + computerChoice)


    // compare user and computer inputs
    
    if(playerChoice == "R") {
        if(computerChoice =="R"){
        alert("Computer Chose Rock - You tie");
        ties += 1;
    } else if (computerChoice == "P") {
        alert("Computer Chose Paper - You lose");
        losses += losses + 1;
    } else {
        alert("Computer Chose Scissors - You Win");
        wins += wins + 1;
    }
}

    if(playerChoice == "p") {
        if(computerChoice =="P"){
        alert("Computer Chose Paper - You tie");
        ties += 1;
    } else if (computerChoice == "S") {
        alert("Computer Chose Scissors - You lose");
        losses += 1;
    } else {
        alert("Computer Chose Rock - You Win");
        wins += 1;
    }
}

    if(playerChoice == "S") {
        if(computerChoice =="S"){
        alert("Computer Chose Scissors - You tie");
        ties += 1;
    } else if (computerChoice == "R") {
        alert("Computer Chose Rock - You lose");
        losses += 1;
    } else {
        alert("Computer Chose Paper - You Win");
        wins += 1;
    }
    }

    // determine who wins or if it is a tie
    // print out corresponding message with alert()
// WIN/ LOSS



alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties)
    // update stats

    // ask user if they want to play again with confirm()
    var playAgain = confirm("Play Again?");
    if (playAgain) {
        playGame()
    }
}



// run game for this first time
playGame()