'use strict';
// rock paper scissors

//computer move
let computerMove = function() {
  let result = ['rock', 'paper', 'scissors'];
  let move = result[Math.floor(Math.random() * result.length)];
  return move;
}

//player move
let playerMove = 'paper'

//PlayRound

let playRound = function (computerMove, playerMove) {
  if (playerMove === 'rock') {
    if (computerMove === 'paper') {
      return 'you loose! Paper eats rock'
    }
    else if (computerMove === 'scissors') {
      return 'you win! Rock smash scissors'
    }
    else if (computerMove === 'rock'){
      return 'rock rock, no ones wins'
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      return 'paper paper, no one wins'
    }
    else if (computerMove === 'scissors') {
      return 'you loose! scissor cuts paper'
    }
    else if (computerMove === 'rock') {
      return 'you win! paper eats rock'
    }
  }

  else if (playerMove === 'scissors'){
    if (computerMove === 'paper') {
      return 'you win! scissors cut paper'
    }
    else if(computerMove === 'scissors') {
      return 'scissors scissors, no one wins'
    }
    else if (computerMove === 'rock') {
      return 'you loose, rock smash scissors'
    }
  }
}

const playerSelection = 'paper'
const computerSelection = computerMove ()
console.log(playRound(playerSelection, computerSelection))