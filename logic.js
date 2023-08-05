let winMessage = 'You win!';
let loseMessage = 'You lose!'
let tieMessage = 'Tie game!'
let r = 'Rock',
    p = 'Paper',
    s = 'Scissors';

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return r;
    } else if (randomChoice === 1) {
        return p;
    } else {
        return s;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt('Make a move.', 'Rock, Paper, or Scissors?');
    playerChoice = playerChoice.toLowerCase();

    while (playerChoice !== r.toLowerCase() && 
        playerChoice !== p.toLowerCase() && 
        playerChoice !== s.toLowerCase()) {
            playerChoice = prompt('Make a move.', 'Rock, Paper, or Scissors?');
    }

    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return playerChoice;
}

function playOneRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);

    while (playerChoice === computerChoice) {
        console.log(tieMessage + ' Play again.');
        playerChoice = getPlayerChoice();
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        console.log(computerChoice);
    }

    if (playerChoice === r) {
        if (computerChoice === p) {
            console.log(winMessage);
            return winMessage;
        } else if (computerChoice === s) {
            console.log(loseMessage);
            return loseMessage;
        }
    } else if (playerChoice === p) {
        if (computerChoice === r) {
            console.log(winMessage);
            return winMessage;
        } else if (computerChoice === s) {
            console.log(loseMessage);
            return loseMessage;
        }
    } else if (playerChoice === s) {
        if (computerChoice === p) {
            console.log(winMessage);
            return winMessage;
        } else if (computerChoice === r) {
            console.log(loseMessage);
            return loseMessage;
        }
    }

    playerChoice = null;
    computerChoice = null;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        if (playOneRound() === winMessage) {
            playerScore++;
        } else {
            computerScore++;
        }
        console.log(playerScore);
        console.log(computerScore);
    }

    console.log('End of game. ' + (playerScore > computerScore? winMessage: loseMessage));


}



game();