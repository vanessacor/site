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
      //return 'paper paper, no one wins'
    }
    else if (computerMove === 'scissors') {
      computerScore++;
      //return 'you loose! scissor cuts paper'
    }
    else if (computerMove === 'rock') {
      playerScore++;
      //return 'you win! paper eats rock'
    }
  }
  
  else if (playerMove === 'scissors'){
    if (computerMove === 'paper') {
      playerScore++;
      //return 'you win! scissors cut paper'
    }
    else if(computerMove === 'scissors') {
      playerScore++;
      computerScore++;
      //return 'scissors scissors, no one wins'
    }
    else if (computerMove === 'rock') {
      computerScore++;
      //return 'you loose, rock smash scissors'
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