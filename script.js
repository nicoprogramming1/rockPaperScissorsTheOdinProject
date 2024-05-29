
/*
Function to deliver a random choice from computer player
It generates a random number between 1 and 3 inclusively
*/

function getComputerChoiceNumber() {
    let choiceNumber = Math.floor(Math.random() * 3 ) + 1;
    return choiceNumber;
}

/*
Function to convert the numeric choice from the computer into
the corresponding word value: 'rock', 'paper', or 'scissors'.
*/

function getComputerChoice(computerChoiceNumber) {
    let choice;
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
Function to ask user to choose one of the options
It's limited to the prompt only and must handle case
and whitespace to ensure the correct selection

Validates and warns the user if enters an invalid word
(the only valid options are rock, paper or scissors)
*/

function getUserChoice() {
    let choice = "";
    do {
        let word = prompt("Which is it going to be? Rock, paper or scissors?").toLowerCase().trim();
        if(word === "rock" || word === "paper" || word === "scissors") {
            choice = word;
        }
        else {
            alert("Invalid option. Please choose 'rock', 'paper' or 'scissors'");
        }
    }
    while(!choice);
    return choice;
}


let userChoice = getUserChoice();
let computerChoice = getComputerChoice(getComputerChoiceNumber());

console.log(userChoice);
console.log(computerChoice);
