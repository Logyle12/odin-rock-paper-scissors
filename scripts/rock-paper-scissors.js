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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (!humanChoice.localeCompare(computerChoice, undefined, {sensitivity: 'base'})) {
        return "It's a Tie!";
    }

    else if (humanChoice.localeCompare("Rock", undefined, {sensitivity: 'base'}) == 0 && 
    computerChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'}) == 0) {
        humanScore++;
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
    }

    else if (humanChoice.localeCompare("Paper", undefined, {sensitivity: 'base'}) == 0 && 
    computerChoice.localeCompare("Rock", undefined, {sensitivity: 'base'}) == 0) {
        humanScore++;
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
    }

    else if (humanChoice.localeCompare("Scissors", undefined, {sensitivity: 'base'}) == 0 && 
    computerChoice.localeCompare("Paper", undefined, {sensitivity: 'base'}) == 0) {
        humanScore++;
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
    }

    else {
        computerScore++;
        return `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;
    }
}

function playMultipleRounds(n, humanChoice, computerChoice) {
    for (let index = 0; index < n; index++) {
        playRound(humanChoice, computerChoice);      
    }
}