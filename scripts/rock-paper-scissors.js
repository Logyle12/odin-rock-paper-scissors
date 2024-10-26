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
function getPlayerChoice() {
    let playerChoices = document.querySelectorAll('.action-button');

    for (const playerChoice of playerChoices) {
        playerChoice.addEventListener("click", (event) => {
           return event.target.classList[1];
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
    // Check if the player wins with Rock against Scissors
    else if (playerChoice.localeCompare("Rock", undefined, {sensitivity: 'base'}) == 0 && 
             computerChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'}) == 0) {
        playerScore++; // Increment player score
        console.log("Player Wins!");
        return `Player Score: ${playerScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
    // Check if the player wins with Paper against Rock
    else if (playerChoice.localeCompare("Paper", undefined, {sensitivity: 'base'}) == 0 && 
             computerChoice.localeCompare("Rock", undefined, {sensitivity: 'base'}) == 0) {
        playerScore++; // Increment player score
        console.log("Player Wins!");
        return `Player Score: ${playerScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
    // Check if the player wins with Scissors against Paper
    else if (playerChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'}) == 0 && 
             computerChoice.localeCompare("Paper", undefined, {sensitivity: 'base'}) == 0) {
        playerScore++; // Increment player score
        console.log("Player Wins!");
        return `Player Score: ${playerScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
    // If none of the above conditions are met, the computer wins
    else {
        computerScore++; // Increment computer score
        console.log("Computer Wins!");
        return `Player Score: ${playerScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
}

// Function to play multiple rounds of the game
function playGame() {

    // Prompt the user for the number of rounds
    let n = Number(prompt("How many rounds would you like to play?"));

    // Validate the input for the number of rounds
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Please enter a valid number of rounds:"), 10);
    }
    
    // Loop n times to play n rounds of the game
    for (let index = 0; index < n; index++) {
        // Get the player's choice
        const playerSelection = getPlayerChoice();
        // Get the computer's choice (randomized)git
        const computerSelection = getComputerChoice();
         // Output the round to the console
        console.log(`Round ${index + 1}`);
        // Output both selections to the console
        console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
        // Play one round with the current selections and output the result
        console.log(playRound(playerSelection, computerSelection));   
    }

    // Check if the final score is a tie
    if (playerScore == computerScore) {
        // Output the final score and the tie result
        console.log(`Final Score Is:\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}\n`); 
        return "It's a Draw! Great Minds Think Alike, huh?\n";
    }

    // Check if the player has a higher score
    else if (playerScore > computerScore) {
        // Check if the player achieved a perfect score (winning all rounds)
        if (playerScore == n) {
            // Output the final score and the winning result
            console.log(`Final Score Is:\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}\n`);
            
            // Return a special message indicating the player's flawless victory
            return "A Perfect Score! The Machine Never Stood a Chance!";
        }

        // Output the final score and the winning result
        console.log(`Final Score Is:\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}\n`);
        return "Victory is Yours! Take a Bow, Champion!\n"; 
    }

    // Otherwise, the computer wins
    else {
        // Output the final score and the losing result
        console.log(`Final Score Is:\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}\n`);
        return "The Computer Takes This One! Time to Sharpen Your Skills!\n";
    }
}

