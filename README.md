# rockPaperScissorsTheOdinProject

## My first project in JavaScript at The Odin Project (TOP) course

The intention of this exercise for me is to put into practice not just the JS syntax and the logic needed to achieve the intended development, but also to utilize Git/GitHub tools (branches, commit messages, merge), Linux console commands, and to think like a "problem-solving programmer" (planning, pseudo-coding, breaking down large problems into smaller ones) and become more used to English.

The game will be played entirely by console, so no UI is needed
* UPDATE: a basic UI will be developed to practice DOM handling and events in JS


A human player will play against the computer over 5 rounds, and the score will decide the winner at the end, if there is.


### Planning

There are a few main components we can identify right away:

- Computer choice
- Human choice              (human will be 'user' from now on)
- Score
- A round
- The game (5 rounds)
- The reboot

### Pseudo-code

| Start game

    - Welcome the user
    - Initiate a score for each player at 0
    - Initiate a global round-counter at 0

| Each round:

    - Offer user the options and save his choice
    - Generate a random number for computer choice (range 1-3) and save it
    - Increment the score of the player who wins the current round by 1
    - Increment the round counter by 1 each time a round ends

| End game (round = 5):

    - Congratulate winner
    - Offer a reboot that resets parameters (clean console, scores and counters at 0) and restarts the game
