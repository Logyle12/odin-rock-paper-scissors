const gameActionsSection = document.querySelector('.game-actions'); // Selects the section containing game action buttons.
const gameContainer = document.querySelector('.game-container'); // Selects the main container for the game UI.
const gameTitle = document.querySelector('.game-title'); // Selects the main header
const roundsDisplay = document.querySelector('.rounds-display'); // Selects the element that tracks the current round of the game.
let currentRound = 0;

// Function to randomly select the computer's choice in the game
function getComputerChoice() {
    // Generate a random number between 0 and 2
    const computerChoice = Math.round(Math.random() * 2);

    // Map the random number to the corresponding choice
    if (computerChoice == 0) {
        return "rock"; // Return "Rock" for 0
    }
    else if (computerChoice == 1) {
        return "paper"; // Return "Paper" for 1
    }
    else {
        return "scissors"; // Return "Scissors" for 2
    }
}

// Function to create and display the choice for a player or computer
function createChoiceDisplay(selection, className) {
    // Create a container to display the choice, including the title and the corresponding image
    const choiceContainer = document.createElement('div');
    const titleElement = document.createElement('h2');
    const imageElement = document.createElement('img');

    // Add CSS classes for styling the choice display
    choiceContainer.classList.add(className, 'choice-container');
    titleElement.classList.add(`${className}-title`);
    imageElement.classList.add(`${className}-image`);

    // Set the title to "YOU PICKED" and the image source based on the player's choice
    if (className == "player-choice") {
        titleElement.textContent = "YOU PICKED";     
    }

    else {
        titleElement.textContent = "COMPUTER PICKED";
    }
    imageElement.src = `assets/${selection}.png`;

    // Append the title and image elements to the container
    choiceContainer.appendChild(titleElement);
    choiceContainer.appendChild(imageElement);

    // Return the fully constructed choice display element
    return choiceContainer;

}

// Function to display the outcome of the round and provide a "Next Round" option
function showRoundOutcome(outcomeText) {
    // Create a container to display the current roud, round result and a link to the "Next Round"
    const outcomeContainer = document.createElement('div');
    const roundLabel = gameTitle;
    const outcomeTitle = document.createElement('h2');
    const nextRoundLink = document.createElement('a');

    // Add CSS classes to style the outcome display and its child elements
    outcomeContainer.classList.add('outcome-display');
    roundLabel.classList.remove('game-title'); 
    roundLabel.classList.add('round-label');
    outcomeTitle.classList.add('outcome-title');
    nextRoundLink.classList.add('next-round-link');

    // Set the outcome text and the text for the next action and round
    outcomeTitle.textContent = outcomeText;
    roundLabel.textContent = `ROUND ${++currentRound}`;
    nextRoundLink.textContent = "NEXT ROUND";

    // Append the round, outcome title and "Next Round" link to the outcome container
    outcomeContainer.appendChild(outcomeTitle);
    outcomeContainer.appendChild(nextRoundLink);

    // Return the outcome display container and the "Next Round" link as an array
    return [outcomeContainer, nextRoundLink];
}

// Function to handle the next action based on current game state
function handleNextAction(actionButton, resultsContainer) {
    // Select all elements that display score values from the DOM
    const scoreElements = document.querySelectorAll('.score-value');
    // Select outcome title
    const outcomeTitle = document.querySelector('.outcome-title');
    // Select outcome display
    const outcomeDisplay = document.querySelector('.outcome-display');

    // Iterate over each score element
    for (const scoreElement of scoreElements) {
        console.log(`Score Value: ${scoreElement.dataset.scoreValue}`); // Log the current score value (for debugging purposes)

        // Check if the score has reached 5, indicating the game is over
        if (scoreElement.dataset.scoreValue === "5") {
            // Change the action button text to prompt a new game
            actionButton.textContent = "PLAY AGAIN?";
            // Adjust outcome styling for final result emphasis
            outcomeDisplay.style["margin-top"] = "40px";
            outcomeTitle.style["font-size"] = "38px";
            if (scoreElement.classList.contains('player-score')) {
                outcomeTitle.textContent = "Victory Is Yours! Take A Bow Champion!" // Player Wins Message
            }

            else {
                outcomeTitle.textContent = "The Computer Takes This One. Time to Sharpen Up Your Skills!" // Computer Wins Message;
            }
        }
    }

    // Add an event listener to the provided action button that triggers after a delay
    actionButton.addEventListener("click", () => {
        if (actionButton.textContent === "PLAY AGAIN?") {
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
    arrowIcon.src = "assets/arrow.png";
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

// Function to update the history of selections made in each round
function updateRoundSelections(playerSelection, computerSelection, roundsContainer) {
    const roundResults = roundsContainer.querySelectorAll(".round-result");

    for (const roundResult of roundResults) {   
        console.log(roundResult);
        if (roundResult.classList.contains('player')) {
            roundResult.src = `assets/${playerSelection}.png`;
            roundResult.alt = playerSelection;
        } else {
            roundResult.src = `assets/${computerSelection}.png`;
            roundResult.alt = computerSelection;
        }

        // Scroll into view to focus on the last round’s result
        roundResult.scrollIntoView();
    }
}

// Function to display the results for each round of the game
function showRoundResults(playerSelection, computerSelection, roundsContainer, roundOutcome) {
    const resultsSection = document.createElement('section');
    resultsSection.classList.add('results-display');

    // Create player choice display
    const playerChoiceDiv = createChoiceDisplay(playerSelection, 'player-choice');
    resultsSection.appendChild(playerChoiceDiv);

    // Create win result display and access using index
    const outcomeArray = showRoundOutcome(roundOutcome);
    const outcomeDisplay = outcomeArray[0];
    const actionLink = outcomeArray[1];
    resultsSection.appendChild(outcomeDisplay);

    // Create computer choice display
    const computerChoiceDiv = createChoiceDisplay(computerSelection, 'computer-choice');
    resultsSection.appendChild(computerChoiceDiv);

    // Replace game action section with results display
    gameActionsSection.remove();
    gameContainer.insertBefore(resultsSection, roundsDisplay);

    // Set up play again event listener
    handleNextAction(actionLink, resultsSection);

    // Record the round
    updateRoundSelections(playerSelection, computerSelection, roundsContainer);

} 

// Increment the score by 1 and update the displayed text content
function incrementScore(score) {
    // Retrieve the current score from the custom data attribute
    let currentScore = score.getAttribute('data-score-value');
    
    // Convert the current score to an integer and increment it by 1
    currentScore = parseInt(currentScore) + 1;

    // Log the current score and the score after incrementing
    console.log(`Current Score: ${currentScore}`);
    console.log(`Current Score After Increment: ${currentScore}`);

    // Update the custom data attribute with the new score value
    score.setAttribute('data-score-value', `${currentScore}`);

    // Delay the update of the displayed text content by 1 second
    setTimeout(() => {
         score.textContent = currentScore; // Update the visible score
    }, 1000);   
}


// Function to play a round of the game
function playRound(playerChoice, computerChoice, roundsContainer) {
    // Select score elements to update player and computer scores
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    const scoreSummary = `Player Score: ${playerScore.dataset.scoreValue} \nComputer Score: ${computerScore.dataset.scoreValue}\n`;
    let winResult; // Store the outcome message of the round

    // Make the round display visible
    roundsDisplay.style["display"] = "flex";
    
    // Check if the choices are the same, indicating a tie
    if (!playerChoice.localeCompare(computerChoice, undefined, {sensitivity: 'base'})) {
        console.log("It's a Tie!"); 
        console.log(scoreSummary);
        roundsContainer.style["border"] = "1px solid rgba(119, 119, 119, 0.284)";
        roundsContainer.style["background-color"] = "rgba(119, 119, 119, 0.284)";
        winResult = "DRAW"; // Outcome message for a tie
        return winResult; 
    }
    
    // Define winning combinations as arrays
    const winningCombinations = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors", "Paper"]
    ];

    // Check if the player wins
    const playerWins = winningCombinations.some(combination =>
        combination[0].toLocaleLowerCase() === playerChoice && combination[1].toLocaleLowerCase() === computerChoice
    );

    // Log the winning result based on the player's win status
    if (playerWins) {
        incrementScore(playerScore);
        console.log("Player Wins!");
        console.log(scoreSummary);
        roundsContainer.style["border"] = "1px solid rgba(49, 95, 49, 0.466)";
        roundsContainer.style["background-color"] = "rgba(49, 95, 49, 0.466)";
        winResult = "YOU WIN!"; // Outcome message if the player wins
        return winResult;
    } else {
        incrementScore(computerScore);
        console.log("Computer Wins!");
        console.log(scoreSummary);
        roundsContainer.style["border"] = "1px solid rgba(108, 49, 49, 0.466)";
        roundsContainer.style["background-color"] = "rgba(108, 49, 49, 0.466)";
        winResult = "YOU LOSE"; // Outcome message if the computer wins
        return winResult;
    }
    
}

// Function to get the player's choice
function playGame() {
    const playerChoices = document.querySelectorAll('.action-button');

    for (const playerChoice of playerChoices) {
        playerChoice.addEventListener("click", (event) => {
            const computerSelection = getComputerChoice();
            const playerSelection = event.target.classList[1];
            const playerResult = document.createElement('img');
            const computerResult = document.createElement('img');
            const roundsContainer = document.createElement('div');
            playerResult.classList.add('player');
            computerResult.classList.add('computer');

            // Output both selections to the console
            console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);

            const winResult = playRound(playerSelection, computerSelection, roundsContainer);
            console.log(winResult);

             // Record and display the results for the current round
            addRoundResult(playerResult, roundsContainer);
            addRoundResult(computerResult, roundsContainer);
            showRoundResults(playerSelection, computerSelection, roundsContainer, winResult);

        });
    }
}

playGame();