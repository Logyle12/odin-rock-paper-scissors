// Function to randomly select the computer's choice in the game
function getComputerChoice() {
    // Generate a random number between 0 and 2
    let computerChoice = Math.round(Math.random() * 2);

    // Map the random number to the corresponding choice
    if (computerChoice == 0) {
        return "Rock"; // Return "Rock" for 0
    }
    else if (computerChoice == 1) {
        return "Paper"; // Return "Paper" for 1
    }
    else {
        return "Scissors"; // Return "Scissors" for 2
    }
}

// Function to get the player's choice
function playGame() {
    let playerChoices = document.querySelectorAll('.action-button');

    for (const playerChoice of playerChoices) {
        playerChoice.addEventListener("click", (event) => {
            const computerSelection = getComputerChoice();
            const playerSelection = event.target.classList[1];

            // Output both selections to the console
            console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);

            console.log(playRound(playerSelection, computerSelection));
        });
    }
}

// Variables to keep track of the player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to play a round of the game
function playRound(playerChoice, computerChoice) {
    // Check if the choices are the same, indicating a tie
    if (!playerChoice.localeCompare(computerChoice, undefined, {sensitivity: 'base'})) {
        console.log("It's a Tie!");
        return `Player Score: ${playerScore} \nComputer Score: ${computerScore}\n`; // Return a tie message
    }

    // Define winning combinations as arrays
    const winningCombinations = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors", "Paper"]
    ];

}