/*
Function to deliver a random choice from computer player
It will generate a random number between 1 and 3.
Meaning:
1- rock
2- paper
3- scissors
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 ) + 1;
    return choice;
}


