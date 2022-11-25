


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
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", playGame);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var choice = ["Rock", "Paper", "Scissors", "spock", "Lizard"]
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
    playerChoice = prompt('Enter Rock, Paper, Scissors, Lizard, Spock:')

    // generate computer input
    computerChoice = choice[getRandomInt(3)] 

    

    alert("You chose " + playerChoice)
    alert("Computer chose " + computerChoice)


    // compare user and computer inputs
    
    if(playerChoice == "Rock") {
        if(computerChoice =="Rock"){
        alert("Computer Chose Rock - You tie");
        ties += 1;
    } else if (computerChoice == "Paper") {
        alert("Computer Chose Paper - Paper Covers Rock - You lose");
        losses += 1;
    } else if (computerChoice == "Spock") {
        alert("Computer Chose Spock - Spock Vaporizes Rock - You Lose");
        losses += 1;
    } else if (computerChoice == "Lizard"){
        alert("Computer Chose Lizard - Rock Crushes Lizard - You Win");
        wins += 1;
    }
    else{
        alert("Computer Chose Scissors - Rock Crushes Scissors - You Win");
        wins += 1;
    }
}

    if(playerChoice == "Paper") {
        if(computerChoice =="Paper"){
        alert("Computer Chose Paper - You tie");
        ties += 1;
    } else if (computerChoice == "Scissors") {
        alert("Computer Chose Scissors - Scissors Cut Paper - You lose");
        losses += 1;
    } else if(computerChoice == "Lizard") {
        alert("Computer Chose Lizard - Lizard Eats Paper - You Lose");
        losses += 1;
    } else if (computerChoice == "Spock") {
        alert("Computer Chose Spock - Paper Disproves Spock - You Win");
        wins += 1;
    }
    else {
        alert("Computer Chose Rock - You Win");
        wins += 1;
    }
}

    if(playerChoice == "Scissors") {
        if(computerChoice =="Scissors"){
        alert("Computer Chose Scissors - You Tie");
        ties += 1;
    } else if (computerChoice == "Rock") {
        alert("Computer Chose Rock - Rock Crushes Scissors - You Lose");
        losses += 1;
    } else if (computerChoice == "Spock") {
        alert("Computer Chose Spock - Spock Smashes Scissors - You Lose");
        losses += 1;
    } else if (computerChoice == "Lizard") {
        alert("Computer Chose Lizard - Scissors Decapitates Lizard - You Win");
        wins += 1;
    }
    else {
        alert("Computer Chose Paper - Scissors Cuts Paper - You Win");
        wins += 1;
    }
    }

    // if spock
    if(playerChoice == "Spock") {
        if(computerChoice =="Spock"){
        alert("Computer Chose Spock - You Tie");
        ties += 1;
    } else if (computerChoice == "Lizard") {
        alert("Computer Chose Lizard - Lizard Poisons Spock - You Lose");
        losses += 1;
    } else if (computerChoice == "Paper") {
        alert("Computer Chose Paper - Paper Disproves Spock - You Lose");
        losses += 1;
    } else if (computerChoice == "Rock") {
        alert("Computer Chose Rock - Spock Vaporizes Rock - You Win");
        wins += 1;
    }
    else {
        alert("Computer Chose Scissors - Spock Smashes Scissors - You Win");
        wins += 1;
    }
    }
    // if lizard
    if(playerChoice == "Lizard") {
        if(computerChoice =="Lizard"){
        alert("Computer Chose Lizard - You Tie");
        ties += 1;
    } else if (computerChoice == "Rock") {
        alert("Computer Chose Rock - Rock Crushes Lizard - You Lose");
        losses += 1;
    } else if (computerChoice == "Scissors") {
        alert("Computer Chose Scissors - Scissors Decapitates Lizard - You Lose");
        losses += 1;
    } else if (computerChoice == "Spock") {
        alert("Computer Chose Spock - Lizard Poisons Spock - You Win");
        wins += 1;
    }
    else {
        alert("Computer Chose Paper - Lizard Eats Paper - You Win");
        wins += 1;
    }
    // determine who wins or if it is a tie
    // print out corresponding message with alert()
// WIN/ LOSS
    }


    alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties)
    // update stats

    // ask user if they want to play again with confirm()
    var playAgain = confirm("Play Again?");
    if (playAgain) {
        playGame()
    }}
