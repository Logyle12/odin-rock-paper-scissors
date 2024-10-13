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
    // Otherwise the input is invalid
    else {
        // Continue prompting the user until a valid choice is entered
        while (!(humanChoice.localeCompare("Rock", undefined, { sensitivity: 'base' }) == 0 || 
               humanChoice.localeCompare("Paper", undefined, { sensitivity: 'base' }) == 0 || 
               humanChoice.localeCompare("Scissors", undefined, { sensitivity: 'base' }) == 0)) {

            // Log an error message to the console for invalid choices
            console.log("Invalid choice. Please try again.");

            // Prompt the user for their choice again
            humanChoice = prompt("Please enter your choice: Rock, Paper, or Scissors:");
        }

        return humanChoice; // Return the choice if valid
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
function playGame() {

    // Prompt the user for the number of rounds
    let n = Number(prompt("How many rounds would you like to play?"));

    // Validate the input for the number of rounds
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Please enter a valid number of rounds:"), 10);
    }
    
    // Loop n times to play n rounds of the game
    for (let index = 0; index < n; index++) {
        // Get the human player's choice
        const humanSelection = getHumanChoice();
        // Get the computer's choice (randomized)
        const computerSelection = getComputerChoice();
         // Output the round to the console
        console.log(`Round ${index + 1}`);
        // Output both selections to the console
        console.log(`Human: ${humanSelection} \nComputer: ${computerSelection}`);
        // Play one round with the current selections and output the result
        console.log(playRound(humanSelection, computerSelection));   
    }

    // Check if the final score is a tie
    if (humanScore == computerScore) {
        // Output the final score and the tie result
        console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`); 
        return "It's a Draw! Great Minds Think Alike, huh?\n";
    }

    // Check if the human player has a higher score
    else if (humanScore > computerScore) {
        // Check if the human player achieved a perfect score (winning all rounds)
        if (humanScore == n) {
            // Output the final score and the winning result
            console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
            
            // Return a special message indicating the human's flawless victory
            return "A Perfect Score! The Machine Never Stood a Chance!";
        }

        // Output the final score and the winning result
        console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
        return "Humanity Prevails! Take a Bow, Champion!\n"; 
    }

    // Otherwise, the computer wins
    else {
        // Output the final score and the losing result
        console.log(`Final Score Is:\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}\n`);
        return "The Computer Takes This One! Time to Sharpen Your Skills!\n";
    }
}

