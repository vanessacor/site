'use strict'

// todo $
// todo const
// todo getElemebt...

//set variables

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const $computerChoices = [computerRock, computerPaper, computerScissors];
const $playerMoves = document.getElementById('player-move');
const $playerRock = document.getElementById('player-rock');
const $playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const $choices = document.getElementById('choices')

const $allMoves = document.querySelectorAll('.move i')
const $playerScoreDisplay = document.getElementById('player-score');
const $computerScoreDisplay = document.getElementById('computer-score');

const $paperBtn = document.getElementById('paper');
const $rockBtn = document.getElementById('rock');
const $scissorsBtn = document.getElementById('scissors');
const $resetBtn = document.getElementById('reset');
const gameBtn = document.querySelectorAll('#choices button');

let playerScore = 0;
let computerScore = 0;


$resetBtn.addEventListener('click', reset);

gameBtn.forEach ((button)=> {
  button.addEventListener ('click', () => {
    nextRound(button.id);
    showHidePlayerMove ('player', button.id);
  })
})

//computer move
function computerMove () {
  let result = ['rock', 'paper', 'scissors'];
  let move = result[Math.floor(Math.random() * result.length)];
  return move
}

//scores
function updateScore (playerMove, computerMove) {
  if (playerMove === 'rock' && computerMove === 'scissors' ||
  playerMove === 'paper' && computerMove === 'rock' ||
  playerMove === 'scissors' && computerMove === 'paper') {
    playerScore++;
  }
  else if (playerMove === 'scissors' && computerMove === 'rock' ||
  playerMove === 'rock' && computerMove === 'paper' ||
  playerMove === 'paper' && computerMove === 'scissors') {
    computerScore++;
  }
}

function displayScore() {
  $playerScoreDisplay.textContent = playerScore;
  $computerScoreDisplay.textContent = computerScore;
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function displayGameOver(){
  $choices.style.display = 'none';
  $resetBtn.style.display = 'initial';
  
  if (playerScore >= 5) {
    return document.querySelector('#player-wins').style.display = 'block';
  } else if (computerScore >= 5) {  
    return document.querySelector('#computer-wins').style.display = 'block';
  }
}

//game 
function nextRound (playerSelection) {
  if (!isGameOver()) {
    let computerSelection = computerMove();
    showHidePlayerMove('computer', computerSelection);
    updateScore(playerSelection, computerSelection);
    displayScore();

    if (isGameOver()) {
      displayGameOver()
    }
  }
}

function showHidePlayerMove (player, move) {
  const moves = document.getElementById(`${player}-move`);
  Array.from(moves.children).forEach (icon =>{
    console.log (icon.id, move);
    const isChosenMove = `${player}-${move}`
    icon.style.display = (icon.id === isChosenMove ? 'block' : 'none')
  })
}

//end game
function reset () {
  computerScore = 0
  playerScore = 0
  $playerScoreDisplay.textContent= playerScore;
  document.getElementById('computer-score').textContent= computerScore;
  document.getElementById('player-wins').style.display = 'none';
  document.getElementById('computer-wins').style.display = 'none';
  $allMoves.forEach(function (i) {
    i.style.display = 'none';
  })
  $choices.style.display = 'flex';
  $resetBtn.style.display = 'none';
}

