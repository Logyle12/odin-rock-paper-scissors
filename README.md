# Rock Paper Scissors Game

## Overview

This project contains a dynamic implementation of the classic **Rock, Paper, Scissors** game, built with HTML, CSS, and JavaScript. Players compete against a computer opponent, and the interface reflects game progress, choices, and outcomes with real-time updates. The game tracks scores across rounds, and the experience is complemented by visual feedback for each win, loss, or draw.

## Features

- **Computer and Player Choices**: The computer randomly selects between Rock, Paper, or Scissors, and players make their selections via on-screen buttons.
- **Score Tracking**: Scores for both the player and the computer are maintained and displayed throughout the game.
- **Round Tracking and Results Display**: Each round displays the player’s and computer’s choices, the round result, and cumulative round history.
- **Game-End Feedback**: When either the player or the computer reaches 5 wins, a final victory or defeat message appears with the option to reset the game.
- **Interactive UI**: The interface updates dynamically to display round outcomes, including win or loss streaks, using CSS for transitions and animations.

## Live Preview

You can view a live demo of the game [here](https://logyle12.github.io/odin-rock-paper-scissors/).

## Getting Started

To start playing the game:
1. Clone or download this repository.
2. Open the `index.html` file in a web browser.
3. Select your choice (Rock, Paper, or Scissors) by clicking on the respective button.

### Project Structure

The main logic and style are split across the following files:
- **`index.html`**: Contains the structure and layout for the game UI.
- **`styles.css`**: Defines the visual styles for the game, including transitions and animations.
- **`rock-paper-scissors.js`**: Contains all the game logic, including functions for generating computer choices, handling player choices, determining the outcome, and updating the UI.

### Key JavaScript Functions

The game logic is modularized for readability and includes the following core functions:

1. **`getComputerChoice()`**: Randomly generates the computer's choice among "rock," "paper," and "scissors."
2. **`createChoiceDisplay(selection, className)`**: Generates a UI element displaying the choice (Rock, Paper, or Scissors) for either the player or the computer.
3. **`showRoundOutcome(outcomeText)`**: Displays the outcome of each round with the option to proceed to the next round.
4. **`playRound(playerChoice, computerChoice, roundsContainer)`**: Handles the main round logic, determines win/loss/draw, and updates the scores accordingly.
5. **`playGame()`**: Manages player interactions, displays choices, and initiates each round when a choice is made.

### Example of Gameplay

After loading the game:
- Players can start a new round by selecting Rock, Paper, or Scissors.
- Each choice displays both the player’s and computer’s selection, with an animated result indicating a win, loss, or tie.
- The game continues until either the player or computer reaches 5 wins, at which point a final message displays the overall winner.

### Customization

- **Styling**: The CSS file (`styles.css`) controls the visual layout and animations. Custom styles can be added to enhance UI elements.
- **Game Logic**: `rock-paper-scissors.js` contains the core functions. You can adjust win conditions, animations, or round-specific logic to create custom gameplay experiences.

## Conclusion

This game offers an interactive Rock, Paper, Scissors experience with a clean UI and modular JavaScript logic, making it both a fun game and a valuable coding project. Feel free to experiment with additional features, such as timed rounds or alternative win conditions, to expand its functionality!