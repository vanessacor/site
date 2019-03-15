'use strict';
// rock paper scissors

//computer move
let computerMove = function() {
  let result = ['rock', 'paper', 'scissors'];
  let move = result[Math.floor(Math.random() * result.length)];
  return move;
}

//scores
let playerScore = 0;
let computerScore = 0;

//PlayRound
let playRound = function (computerMove, playerMove) {
  if (playerMove === 'rock') {
    if (computerMove === 'paper') {
      computerScore++;
    }
    else if (computerMove === 'scissors') {
      playerScore++;
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'scissors') {
      computerScore++;
    }
    else if (computerMove === 'rock') {
      playerScore++;
    }
  }
  else if (playerMove === 'scissors'){
    if (computerMove === 'paper') {
      playerScore++;
    }
    else if (computerMove === 'rock') {
      computerScore++;
    }
  }
}

//game 
function game (player) {
  if (playerScore < 5 && computerScore < 5) {
    let playerSelection = player;
    let computerSelection = computerMove();
    playRound(playerSelection, computerSelection);

    document.getElementById('playerscore').textContent = playerScore;
    document.getElementById('computerscore').textContent = computerScore;

    if (playerScore >= 5) {
      return document.querySelector('#playerwins').style.display = 'block';
    } 
    else if (computerScore >= 5) {
      return document.querySelector('#computerwins').style.display = 'block';
    } 
  }
}

let paperBtn = document.getElementById('paper');
let rockBtn = document.getElementById('rock');
let scissorsBtn = document.getElementById('scissors');
let resetBtn = document.getElementById('reset');

//add eventlisteners
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
  computerScore = 0
  playerScore = 0
  document.getElementById('playerscore').textContent = playerScore;
  document.getElementById('computerscore').textContent = computerScore;
  document.getElementById('playerwins').style.display = 'none';
  document.getElementById('computerwins').style.display = 'none';;
}

resetBtn.addEventListener('click', reset);
