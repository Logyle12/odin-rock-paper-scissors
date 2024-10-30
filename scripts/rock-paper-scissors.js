// Function to randomly select the computer's choice in the game
function getComputerChoice() {
    // Generate a random number between 0 and 2
    const computerChoice = Math.round(Math.random() * 2);

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

// Function to create and display the choice for a player or computer
function createChoiceDisplay(selection, choiceClass) {
    // Create a container to display the choice, including the title and the corresponding image
    const choiceContainer = document.createElement('div');
    const titleElement = document.createElement('h2');
    const imageElement = document.createElement('img');

    // Add CSS classes for styling the choice display
    choiceContainer.classList.add(choiceClass, 'choice-container');
    titleElement.classList.add(`${choiceClass}-title`);
    imageElement.classList.add(`${choiceClass}-image`);

    // Set the title to "YOU PICKED" and the image source based on the player's choice
    titleElement.textContent = "YOU PICKED";
    imageElement.src = `../assets/${selection}.png`;

    // Append the title and image elements to the container
    choiceContainer.appendChild(titleElement);
    choiceContainer.appendChild(imageElement);

    // Return the fully constructed choice display element
    return choiceContainer;

}

// Function to display the outcome of the round and provide a "Next Round" option
function showRoundOutcome(outcomeText) {
    // Create a container to display the round result and a "Next Round" link
    const outcomeContainer = document.createElement('div');
    const outcomeTitle = document.createElement('h2');
    const nextRoundLink = document.createElement('a');

    // Add CSS classes to style the outcome display and the "Next Round" link
    outcomeContainer.classList.add('outcome-display');
    outcomeTitle.classList.add('outcome-title');
    nextRoundLink.classList.add('next-round-link');

    // Set the outcome text and the text for the next action
    outcomeTitle.textContent = outcomeText;
    nextRoundLink.textContent = "NEXT ROUND";

    // Append the outcome title and "Next Round" link to the outcome container
    outcomeContainer.appendChild(outcomeTitle);
    outcomeContainer.appendChild(nextRoundLink);

    // Return the outcome display container and the "Next Round" link as an array
    return [outcomeContainer, nextRoundLink];
}

// Function to handle the next action based on current game state
function handleNextAction(actionButton, resultsContainer) {
    // Select all elements that display score values from the DOM
    const scoreElements = document.querySelectorAll('.score-value');

    // Iterate over each score element
    for (const scoreElement of scoreElements) {
        console.log(`Score Value: ${scoreElement.textContent}`); // Log the current score value (for debugging purposes)

        // Check if the score has reached 5, indicating the game is over
        if (scoreElement.textContent === "5") {
            // Change the action button text to prompt a new game
            actionButton.textContent = "PLAY AGAIN";
        }
    }

    // Add an event listener to the provided action button that triggers after a delay
    actionButton.addEventListener("click", () => {
        if (actionButton.textContent === "PLAY AGAIN") {
            // Reload the page to reset the game state if new game
            location.reload();
        } else {
            // If the game is not over, prepare for the next round
            // Apply a 150ms delay before executing the callback function
            setTimeout(() => {
                roundsDisplay.style.display = "none";
                resultsContainer.remove();
                gameContainer.insertBefore(gameActionsSection, roundsDisplay);
            }, 150);
        }
    });
}

// Function to add the result of a round to the rounds container
function addRoundResult(roundOutcome, roundsContainer) {
    const arrowIcon = document.createElement('img');
    arrowIcon.classList.add('arrow');
    arrowIcon.src = "../assets/arrow.png";
    roundsContainer.classList.add('rounds-container');
    roundOutcome.classList.add('round-result');

    // Append or insert round result based on player or computer choice
    if (roundOutcome.classList.contains('player')) {
        roundsContainer.appendChild(arrowIcon);
        roundsContainer.insertBefore(roundOutcome, arrowIcon);
    } else {
        roundsContainer.appendChild(roundOutcome);
    }

    roundsDisplay.appendChild(roundsContainer);
}

// Increment the score by 1 and update the displayed text content
function incrementScore(score) {
    score.textContent = parseInt(score.textContent) + 1;
}

// Function to play a round of the game
function playRound(playerChoice, computerChoice) {
    // Select score elements to update player and computer scores
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    
    // Check if the choices are the same, indicating a tie
    if (!playerChoice.localeCompare(computerChoice, undefined, {sensitivity: 'base'})) {
        console.log("It's a Tie!"); 
        return `Player Score: ${playerScore.textContent} \nComputer Score: ${computerScore.textContent}\n`; 
    }
    
    // Define winning combinations as arrays
    const winningCombinations = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors", "Paper"]
    ];

    // Check if the player wins
    const playerWins = winningCombinations.some(combination =>
        combination[0].toLocaleLowerCase() === playerChoice && combination[1] === computerChoice
    );

    // Log the winning result based on the player's win status
    if (playerWins) {
        incrementScore(playerScore);
        console.log("Player Wins!");
    } else {
        incrementScore(computerScore);
        console.log("Computer Wins!");
    }
    
    // Return the current scores for the player and computer after determining the round outcome
    return `Player Score: ${playerScore.textContent} \nComputer Score: ${computerScore.textContent}\n`; 

}

// Function to get the player's choice
function playGame() {
    const playerChoices = document.querySelectorAll('.action-button');

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

playGame();