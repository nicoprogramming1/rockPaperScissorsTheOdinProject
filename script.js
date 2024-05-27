/*
Function to deliver a random choice from computer player
It will generate a random number between 1 and 3 inclusively
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 ) + 1;
    return choice;
}

/*
Function to ask human player to choose one of the options
It's limited to the prompt only and must handle case
and whitespace to ensure the correct selection
Also, it must warning the human player if types an invalid word
(it will only be accepted if they type one of the three options)
*/

function getHumanChoice() {
    let choice;
    while (true) {
        let word = prompt("Which is it going to be? Rock, paper or scissors?");
        choice = word.toLowerCase().trim();
        if (word === "rock" || word === "paper" || word === "scissors") {
            break;
        }
        else {
            alert("Invalid option. Please choose 'rock', 'paper' or 'scissors'");
        }
    }
    return choice;
}


let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(getComputerChoice());
console.log(getHumanChoice());


/*
switch(choice) {
    case 1:
    choice = "Rock";
    break;
    case 2:
    choice = "Paper";
    break;
    case 3:
    choice = "Scissors";
    break;
}
*/
