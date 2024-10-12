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

    if (!humanChoice.localeCompare("Rock", undefined, {sensitivity: 'base'})) {
        return humanChoice;
    }

    else if (!humanChoice.localeCompare("Paper", undefined, {sensitivity: 'base'})) {
        return humanChoice;
    }
    
    else if (!humanChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'})) {
        return humanChoice;
    }

    else {
        return alert("Please Enter A Valid Choice!");
    }
}

function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    if (!humanChoice.localeCompare(computerChoice, undefined, {sensitivity: 'base'})) {
        return "It's a Tie!";
    }

}