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
    let humanChoice = Number(prompt("Enter 0 for Rock, 1 for Paper, or 2 for Scissors:"));
}