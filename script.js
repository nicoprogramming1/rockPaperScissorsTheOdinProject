
/*
Generates a random choice for the computer player
Returns a random number between 1 and 3 (inclusive)
*/

function getComputerChoiceNumber() {
    const choiceNumber = Math.floor(Math.random() * 3 ) + 1;
    return choiceNumber;
}


/*
Converts the numeric choice received from the computer in computerChoiceNumber() function into
the corresponding word value: 'rock', 'paper', or 'scissors'
*/

function getComputerChoice(computerChoiceNumber) {
    let choice = "";
    switch(computerChoiceNumber) {
        case 1:
        choice = "rock";
        break;
        case 2:
        choice = "paper";
        break;
        case 3:
        choice = "scissors";
        break;
    }
    return choice;
}


/*
Ask user to choose one of the options and saves it in "choice" variable
It's limited to the prompt only and must handle case
and whitespace to ensure the correct selection

Validates and warns the user if enters an invalid word
(the only valid options are rock, paper or scissors)

*/

function getUserChoice() {
    let choice = "";
    do {
        const userInput = prompt("Which is it going to be? Rock, paper or scissors?").toLowerCase().trim();
        if(
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors"
        ) {
            choice = userInput;
        }
        else {
            alert("Invalid option. Please choose 'rock', 'paper' or 'scissors'");
        }
    }
    while(!choice);
    return choice;
}


/*
Handle a single round of the game
Receives by parameter both player choices and determinate who wins
every match incrementing the corresponding winner score by 1 but also the round
*/

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        alert("It's a tie!");
    }
    else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        alert("You win the round!");
    }
    else {
        computerScore++;
        alert("You lose the round");
    }
    ++round;
}


/*
Controls the flow of the game and gets both player choices,
iterating through each round and informs the user about the choices made by both players, the current score,
and the current round number
*/

function playGame() {
    for(let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();     // constant variables for both player choices
        const computerChoice = getComputerChoice(getComputerChoiceNumber());

        console.log(`You have selected ${userChoice}`);
        console.log(`Your rival chooses ${computerChoice}`);
        playRound(userChoice, computerChoice);
        console.log(`Score || Player: ${userScore} - Rival: ${computerScore} || Round: ${round}`);
        console.log("------------------------");
    }

    announceWinner(userScore, computerScore);
}


// Added modular function to determine the overall winner and announce the result

function announceWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        alert("Congratulations, you win!");
        console.log("You win!");
    } else if (userScore < computerScore) {
        alert("Sadly, you lost. Reload (F5) to try again!");
        console.log("You lose..");
    } else {
        alert("The game ends with no winners.");
        console.log("It's a tie!");
    }
    console.log("Game over");
    console.log("------------------------");
}


let userScore = 0; 
let computerScore = 0;  // global variables for player scores and round
let round = 0;

playGame();     // program trigger