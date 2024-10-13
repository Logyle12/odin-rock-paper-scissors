# Rock Paper Scissors Game

## Overview

This repository contains a simple implementation of the classic game **Rock, Paper, Scissors**, developed using HTML and JavaScript. Players compete against a computer opponent, with outcomes determined by standard game rules. The game allows for multiple rounds and tracks scores for both the player and the computer.

## Features

- **Random Computer Choice**: The computer randomly selects between Rock, Paper, or Scissors.
- **User Input Handling**: The player can enter their choice via a prompt, with validation to ensure valid input.
- **Score Tracking**: Scores are maintained for both the player and the computer throughout the game.
- **Dynamic Results**: Results are displayed after each round, with a final summary at the end.

## Getting Started

To run the game, open the `index.html` file in a web browser. The game will automatically start, prompting the player to make a choice.

### JavaScript Logic

The game logic is encapsulated in the `rock-paper-scissors.js` file and includes the following key functions:

1. **`getComputerChoice()`**: Generates a random choice for the computer.
2. **`getHumanChoice()`**: Prompts the user for their choice and validates the input.
3. **`playRound(humanChoice, computerChoice)`**: Evaluates the choices and determines the round winner.
4. **`playGame()`**: Manages the game flow by prompting the user for the number of rounds to play, looping through the specified rounds, and summarizing the final scores.

### Example of Gameplay

Upon initiation, the player is prompted to choose Rock, Paper, or Scissors. After the player makes their selection, the computer will reveal its choice, and the result will be logged to the console, including the current scores. After all rounds are played, a final score summary will indicate the overall winner.

## Conclusion

This implementation not only provides an enjoyable gaming experience but also serves as an excellent exercise in JavaScript programming. Feel free to modify the code or add new features!
