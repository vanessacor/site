'use strict'

//set variables

let computerRock = document.getElementById('computer-rock');
let computerPaper = document.getElementById('computer-paper');
let computerScissors = document.getElementById('computer-scissors');
let playerRock = document.getElementById('player-rock');
let playerPaper = document.getElementById('player-paper');
let playerScissors = document.getElementById('player-scissors');
let choices = document.getElementById('choices')

//computer move
let computerMove = function() {
  let result = ['rock', 'paper', 'scissors'];
  let move = result[Math.floor(Math.random() * result.length)];
  if (move == 'rock') {
      computerRock.style.display = 'block';
      computerPaper.style.display = 'none';
      computerScissors.style.display = 'none';
  } else if (move == 'paper') { 
      computerPaper.style.display =  'block';
      computerRock.style.display = 'none';
      computerScissors.style.display = 'none';
    } else if (move == 'scissors') {
      computerScissors.style.display = 'block',
      computerPaper.style.display = 'none';
      computerRock.style.display = 'none';
    }
  return move
}

//scores
let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');

//PlayRound
let playRound = function (playerMove, computerMove) {
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


//game 
function game (player) {
  if (playerScore < 5 && computerScore < 5) {
    let playerSelection = player;
    let computerSelection = computerMove();
    playRound(playerSelection, computerSelection);

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore >=5 || computerScore >=5) {
      choices.style.display = 'none';
      resetBtn.style.display = 'initial';
    }
    
    if (playerScore >= 5) {
      return document.querySelector('#player-wins').style.display = 'block';
    } else if (computerScore >= 5) {  
        return document.querySelector('#computer-wins').style.display = 'block';
      } 
  }
}

let paperBtn = document.getElementById('paper');
let rockBtn = document.getElementById('rock');
let scissorsBtn = document.getElementById('scissors');
let resetBtn = document.getElementById('reset');

/*const gameBtn = document.querySelectorAll('#choices button')

gameBtn.forEach ((button)=> {
  button.addEventListener ('click', () => {
    game(button.id);
  })
})*/

//add eventlisteners
paperBtn.addEventListener('click', () => {
  game ('paper');
  playerPaper.style.display = 'block';
  playerRock.style.display = 'none';
  playerScissors.style.display = 'none';
})

rockBtn.addEventListener('click', () => {
  game ('rock');
  playerRock.style.display = 'block';
  playerPaper.style.display = 'none';
  playerScissors.style.display = 'none';
})

scissorsBtn.addEventListener('click', () => {
  game ('scissors');
  playerScissors.style.display = 'block';
  playerPaper.style.display = 'none';
  playerRock.style.display = 'none';
})

function reset () {
  computerScore = 0
  playerScore = 0
  document.getElementById('player-score').textContent= playerScore;
  document.getElementById('computer-score').textContent= computerScore;
  document.getElementById('player-wins').style.display = 'none';
  document.getElementById('computer-wins').style.display = 'none';
  moves.forEach(function (i) {
    i.style.display = 'none';
  })
  choices.style.display = 'flex';
  resetBtn.style.display = 'none';
}

let moves = document.querySelectorAll('.move i')
resetBtn.addEventListener('click', reset);