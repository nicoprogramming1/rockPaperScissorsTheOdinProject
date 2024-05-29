# rockPaperScissorsTheOdinProject

## The first project in JavaScript at The Odin Project (TOP) course

The intention of this exercise for me is to put into practice not just the JS syntax and the logic needed to achieve the intended development, but also to utilize Git/GitHub tools (branches, commit messages, merge), Linux console commands, and to think like a "problem-solving programmer" (planning, pseudo-coding, breaking down large problems into smaller ones) and become more used to English.

The game will be played entirely by console, so no UI is needed.
A human player will play against the computer over 5 rounds, and the score will decide the winner at the end.

There will be some limitations, such as using only a prompt to ask the human player for their selection, no selection options list.

### Planning

There are a few main components we can identify right away:

- Computer choice
- Human choice              (human will be 'user' from now on)
- Score
- The round
- The game (5 rounds)

### Pseudo-code

- Generate a random number (range 1-3)
- Computer randomly "chooses" one of the three options
- Recover and save its selection
- Ask user to select "rock, paper or scissors" by prompt
- If the user enters anything other than the specified three options, the system must warn and prompt them to enter a valid option
- Recover and save their selection
- Initiate a score for each player at 0
- Increment the score of the player who wins the current round by 1
- Initiate a global round-counter at 0
- Increment the round counter by 1 each time a round ends
- Congratulate winner when round-counter is equal to 5 and finish game


