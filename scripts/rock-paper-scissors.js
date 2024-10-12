function getComputerChoice() {
    let computerChoice = Math.round(Math.random() * 2);

    if (computerChoice == 0) {
        return "Rock";
    }

    else if (computerChoice == 1) {
        return "Paper";
    }

    else {
        return "Scissors"
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: Rock, Paper, or Scissors:");

    if (humanChoice == 0) {
        return "Rock";
    }

    else if (humanChoice == 1) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    
}