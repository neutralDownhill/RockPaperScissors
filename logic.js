let playerScore = 0;
let cpuScore = 0;
let playerRoundsWon = 0;
let cpuRoundsWon = 0;
const playerScoreDiv = document.querySelector('#playerScore');
const cpuScoreDiv = document.querySelector('#cpuScore');
let winMessage = 'You win!';
let loseMessage = 'You lose!';
let roundWinMessage = 'WINNER!!!';
let roundLoseMessage = 'LOSER!!!';
let tieMessage = 'Tie game! Play again.';
let r = 'rock',
    p = 'paper',
    s = 'scissors';

const message = document.querySelector('#message');

function getcpuChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return r;
    } else if (randomChoice === 1) {
        return p;
    } else {
        return s;
    }
}

function playOneRound(e) {
    let playerChoice = e.target.id;
    let cpuChoice = getcpuChoice();
    console.log(playerChoice);
    console.log(cpuChoice);

    if (playerChoice === cpuChoice) {
        message.innerText = tieMessage;
        return;
    }
    
    if (playerChoice === r) {
        if (cpuChoice === p) {
            playerWin();
        } else if (cpuChoice === s) {
            cpuWin();
        }
    } else if (playerChoice === p) {
        if (cpuChoice === r) {
            playerWin();
        } else if (cpuChoice === s) {
            cpuWin();
        }
    } else if (playerChoice === s) {
        if (cpuChoice === p) {
            playerWin();
        } else if (cpuChoice === r) {
            cpuWin();
        }
    }

    playerChoice = null;
    cpuChoice = null;




    if(playerScore === 5 || cpuScore === 5) {
        const movesDiv = document.getElementById('moves');
        movesDiv.style.display = 'none';

        const playAgainDiv = document.getElementById('playAgain');
        playAgainBtn.style.display = 'unset';
    }

}

function playerWin() {
    const roundsWonDiv = document.getElementById('roundsWon');

    playerScoreDiv.innerText = ++playerScore;
    if(playerScore === 5) {
        message.innerText = roundWinMessage;
        roundsWonDiv.innerText = ++playerRoundsWon + ':' + cpuRoundsWon;
    } else {
        message.innerText = winMessage;
    }
}

function cpuWin() {
    //message.innerText = loseMessage;
    //cpuScoreDiv.innerText = ++cpuScore;

    const roundsWonDiv = document.getElementById('roundsWon');

    cpuScoreDiv.innerText = ++cpuScore;
    if(cpuScore === 5) {
        message.innerText = roundLoseMessage;
        roundsWonDiv.innerText = playerRoundsWon + ':' + ++cpuRoundsWon;
    } else {
        message.innerText = loseMessage;
    }
}



const btns = document.querySelectorAll('#moves button');

btns.forEach(btn => btn.addEventListener('click', playOneRound));

const playAgainBtn = document.getElementById('playAgainBtn');

playAgainBtn.addEventListener('click', () => {
    const movesDiv = document.getElementById('moves');
    movesDiv.style.display = 'initial';

    const playAgainDiv = document.getElementById('playAgain');
    playAgainBtn.style.display = 'none';

    reset();
})

function reset () {
    playerScore = 0;
    cpuScore = 0;
    playerScoreDiv.innerText = playerScore;
    cpuScoreDiv.innerText = cpuScore;
    message.innerText = 'Make your move!';
}