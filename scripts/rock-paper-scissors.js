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
function getHumanChoice() {
    // Prompt the user for their choice
    let humanChoice = prompt("Please enter your choice: Rock, Paper, or Scissors:");

    // Check if the user's input is "Rock" (case insensitive)
    if (!humanChoice.localeCompare("Rock", undefined, {sensitivity: 'base'})) {
        return humanChoice; // Return the choice if valid
    }
    // Check if the user's input is "Paper" (case insensitive)
    else if (!humanChoice.localeCompare("Paper", undefined, {sensitivity: 'base'})) {
        return humanChoice; // Return the choice if valid
    }
    // Check if the user's input is "Scissors" (case insensitive)
    else if (!humanChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'})) {
        return humanChoice; // Return the choice if valid
    }
    // Alert the user if the input is invalid
    else {
        return alert("Please Enter A Valid Choice!"); 
    }
}

// Variables to keep track of the human and computer scores
let humanScore = 0;
let computerScore = 0;

// Function to play a round of the game
function playRound(humanChoice, computerChoice) {
    // Check if the choices are the same, indicating a tie
    if (!humanChoice.localeCompare(computerChoice, undefined, {sensitivity: 'base'})) {
        console.log("It's a Tie!");
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`; // Return a tie message
    }
    // Check if the human wins with Rock against Scissors
    else if (humanChoice.localeCompare("Rock", undefined, {sensitivity: 'base'}) == 0 && 
             computerChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'}) == 0) {
        humanScore++; // Increment human score
        console.log("Human Wins!");
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
    // Check if the human wins with Paper against Rock
    else if (humanChoice.localeCompare("Paper", undefined, {sensitivity: 'base'}) == 0 && 
             computerChoice.localeCompare("Rock", undefined, {sensitivity: 'base'}) == 0) {
        humanScore++; // Increment human score
        console.log("Human Wins!");
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
    // Check if the human wins with Scissors against Paper
    else if (humanChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'}) == 0 && 
             computerChoice.localeCompare("Paper", undefined, {sensitivity: 'base'}) == 0) {
        humanScore++; // Increment human score
        console.log("Human Wins!");
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
    // If none of the above conditions are met, the computer wins
    else {
        computerScore++; // Increment computer score
        console.log("Computer Wins!");
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`; // Return the score
    }
}

// Function to play multiple rounds of the game
function playGame(n) {
    // Loop n times to play n rounds of the game
    for (let index = 0; index < n; index++) {
        // Get the human player's choice
        let humanSelection = getHumanChoice();
        // Get the computer's choice (randomized)
        let computerSelection = getComputerChoice();
        // Output both selections to the console
        console.log(`Human: ${humanSelection} \nComputer: ${computerSelection}`);
        // Play one round with the current selections and output the result
        console.log(playRound(humanSelection, computerSelection));   
    }

    // Check if the final score is a tie
    if (humanScore == computerScore) {
        // Output the final score and the tie result
        console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`); 
        return "You Tied!\n";
    }

    // Check if the human player has a higher score
    else if (humanScore > computerScore) {
        // Output the final score and the winning result
        console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
        return "Congratulations! You Win!\n"; 
    }

    // Otherwise, the computer wins
    else {
        // Output the final score and the losing result
        console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
        return "The Computer Wins!\n";
    }
}

