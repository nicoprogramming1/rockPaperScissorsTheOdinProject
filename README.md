# rockPaperScissorsTheOdinProject

## The first project in JavaScript at The Odin Project (TOP) course

The intention in this exercise for me, is to put in practice not just the JS syntaxis and the logic to achieve what is here intended to develop, but also Git/GitHub tools (branches, commit messages, merge), Linux console handlement, thinking as a "problem resolving programmer" (planning, pseudo-coding, dividing big problems into sub-problems) and get more used to English.

The game will be played entirely by console, so no UI is needed.
A human player will play against the computer along 5 rounds, and the score will decide who wins at the end.

### Planning

There are several principal parts we can see right away:

- Computer choice
- Human choice
- Score
- The round
- The game (5 rounds)

### Pseudo-code

- Generate a random number (range 1-3)
- Computer randomsly choose first one of the three options
- Recover and save his selection
- Ask human to select "rock, paper or scissors"
- Recover and save their selection
- Initiate a score for each players at 0
- Increment by 1 the score of the player who wins the actual round
- Initiate a global round-counter in 0
- Increment by 1 the round-counter every time a round ends
- Congratulate winner when round-counter is equal to 5 and finish game


