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
    //return 'you loose! Paper eats rock'
  }
    else if (computerMove === 'scissors') {
      playerScore++;
      //return 'you win! Rock smash scissors'
    }
    else if (computerMove === 'rock'){
      playerScore++;
      computerScore++;
      //return 'rock rock, no ones wins'
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      playerScore++;
      computerScore++;
    }
    else if (computerMove === 'scissors') {
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
    else if(computerMove === 'scissors') {
      playerScore++;
      computerScore++;
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
    } else if (computerScore >= 5) {
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
  game ('paper');
})

rockBtn.addEventListener('click', () => {
  game ('rock');
})

scissorsBtn.addEventListener('click', () => {
  game ('scissors');
})