'use strict'
//computer move
let computerMove = function() {
  let result = ['rock', 'paper', 'scissors'];
  let move = result[Math.floor(Math.random() * result.length)];
  if (move == 'rock') {
      document.getElementById('computer-rock').style.display='block';
      document.getElementById('computer-paper').style.display='none';
      document.getElementById('computer-scissors').style.display='none';
  } else if (move == 'paper') {
      document.getElementById('computer-paper').style.display='block';
      document.getElementById('computer-rock').style.display='none';
      document.getElementById('computer-scissors').style.display='none';
  } else if (move == 'scissors') {
      document.getElementById('computer-scissors').style.display='block',
      document.getElementById('computer-paper').style.display='none';
      document.getElementById('computer-rock').style.display='none'
  }
  return move
}

//scores
let playerScore = 0;
let computerScore = 0;

//PlayRound
let playRound = function (playerMove, computerMove) {
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

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

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

//add eventlisteners
paperBtn.addEventListener('click', () => {
  game ('paper');
  document.getElementById('player-paper').style.display='block';
  document.getElementById('player-rock').style.display='none';
  document.getElementById('player-scissors').style.display='none';
})

rockBtn.addEventListener('click', () => {
  game ('rock');
  document.getElementById('player-rock').style.display='block';
  document.getElementById('player-paper').style.display='none';
  document.getElementById('player-scissors').style.display='none';
})

scissorsBtn.addEventListener('click', () => {
  game ('scissors');
  document.getElementById('player-scissors').style.display='block';
  document.getElementById('player-paper').style.display='none';
  document.getElementById('player-rock').style.display='none';
})

function reset () {
  computerScore = 0
  playerScore = 0
  document.getElementById('player-score').textContent= playerScore;
  document.getElementById('computer-score').textContent= computerScore;
  document.getElementById('player-wins').style.display='none';
  document.getElementById('computer-wins').style.display='none';
  moves.forEach(function (i) {
    i.style.display = 'none';
  })
}

let moves = document.querySelectorAll('.move i')
resetBtn.addEventListener('click', reset);