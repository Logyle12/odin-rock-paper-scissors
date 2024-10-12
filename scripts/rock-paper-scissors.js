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
function playMultipleRounds(n) {
    // Loop n times to play n rounds
    for (let index = 0; index < n; index++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`Human: ${humanSelection} \nComputer: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));   // Call playRound for each iteration
    }

    if (humanScore == computerScore) {
        console.log(`Final Score Is:\n Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`); 
        return "You Tied!\n";
    }

    else if (humanScore > computerScore) {
        console.log(`Final Score Is:\n Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
        return "Congratulations! You Win!\n"; 
        
    }

    else {
        console.log(`Final Score Is:\n Human Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
        return "The Computer Wins!\n";
    }
}
