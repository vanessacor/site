'use strict';
// rock paper scissors

// computer move
const computerMove = function () {
  const result = ['rock', 'paper', 'scissors'];
  const move = result[Math.floor(Math.random() * result.length)];
  return move;
};

// scores
let playerScore = 0;
let computerScore = 0;

// PlayRound
const playRound = function (computerMove, playerMove) {
  if (playerMove === 'rock') {
    if (computerMove === 'paper') {
      computerScore++;
    } else if (computerMove === 'scissors') {
      playerScore++;
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'scissors') {
      computerScore++;
    } else if (computerMove === 'rock') {
      playerScore++;
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'paper') {
      playerScore++;
    } else if (computerMove === 'rock') {
      computerScore++;
    }
  }
};

// game
function game (player) {
  if (playerScore < 5 && computerScore < 5) {
    const playerSelection = player;
    const computerSelection = computerMove();
    playRound(playerSelection, computerSelection);

    document.getElementById('playerscore').textContent = playerScore;
    document.getElementById('computerscore').textContent = computerScore;

    if (playerScore >= 5) {
      return document.querySelector('#playerwins').style.display = 'block';
    } else if (computerScore >= 5) {
      return document.querySelector('#computerwins').style.display = 'block';
    }
  }
}

const paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');

// add eventlisteners
paperBtn.addEventListener('click', () => {
  game('paper');
});

rockBtn.addEventListener('click', () => {
  game('rock');
});

scissorsBtn.addEventListener('click', () => {
  game('scissors');
});

function reset () {
  computerScore = 0;
  playerScore = 0;
  document.getElementById('playerscore').textContent = playerScore;
  document.getElementById('computerscore').textContent = computerScore;
  document.getElementById('playerwins').style.display = 'none';
  document.getElementById('computerwins').style.display = 'none'; ;
}

resetBtn.addEventListener('click', reset);
