
/*
Generates a random choice for the computer player
Returns a random number between 1 and 3 (inclusive)
*/

function getComputerChoiceNumber() {
    const choiceNumber = Math.floor(Math.random() * 3 ) + 1;
    return choiceNumber;
}


/*
Converts the numeric choice received from the computer in getComputerChoiceNumber() function into
the corresponding word value: 'rock', 'paper', or 'scissors'
*/

function getTextChoiceFromNumber(choiceNumber) {
    switch(choiceNumber) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}


/*
Handle a single round of the game
Receives by parameter both player choices and determinate who wins
every match incrementing the corresponding winner score by 1 but also the round
*/

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        roundMessage += "It's a tie! ";
    }
    else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        roundMessage += "You win the round! ";
    }
    else {
        computerScore++;
        roundMessage += "You lose the round.. ";
    }
    ++round;
}


/*
Controls the flow of the game, receives user choice by arg and gets the computer choices
Informs the user about the rounds, score and result
After round 5 announce the winner and offers a reboot btn (exchanging buttons)
*/


function playGame(userChoice) {    

    const computerChoice = getTextChoiceFromNumber(getComputerChoiceNumber());
    
    console.log(`You have selected ${userChoice}`);
    console.log(`Your rival chooses ${computerChoice}`);
    playRound(userChoice, computerChoice);
    console.log(`Score || Player: ${userScore} - Rival: ${computerScore} || Round: ${round}`);
    console.log("------------------------");

    if (round < 5) {
        roundMessage += `Round ${round} complete, select your choice for the next one! `;
        alert(roundMessage);
        roundMessage = '';
    } else {
        announceWinner(userScore, computerScore);
        exchangeBtns();
    }
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


function rebootGame() {
    userScore = 0;
    computerScore = 0;
    round = 0;
    exchangeBtns();
    console.clear();
    welcome();
}


function exchangeBtns() {
    while(container.firstChild) {
        container.firstChild.remove();
    }

    if(round === 5) {
        container.appendChild(reboot);
    }
    else {
        container.appendChild(rock);
        container.appendChild(paper);
        container.appendChild(scissors);
    }    
}

function welcome() {
    return alert("Welcome, please select your first choice!");
}


let userScore = 0; 
let computerScore = 0;  // global variables for player scores and round info
let round = 0;
let roundMessage = '';

const container = document.getElementById("container");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const reboot = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
reboot.textContent = "Reboot";

rock.addEventListener('click', () => playGame("rock"));
paper.addEventListener('click', () => playGame("paper"));
scissors.addEventListener('click', () => playGame("scissors"));
reboot.addEventListener('click', rebootGame);

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

welcome();