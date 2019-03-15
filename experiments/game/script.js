'use strict'
//computer move
let computerMove = function() {
  let result = ['rock', 'paper', 'scissors'];
  let move = result[Math.floor(Math.random() * result.length)];
  if (move == 'rock') {
      document.getElementById('crock').style.display='block';
      document.getElementById('cpaper').style.display='none';
      document.getElementById('cscissors').style.display='none';
  } else if (move == 'paper') {
      document.getElementById('cpaper').style.display='block';
      document.getElementById('crock').style.display='none';
      document.getElementById('cscissors').style.display='none';
  } else if (move == 'scissors') {
      document.getElementById('cscissors').style.display='block',
      document.getElementById('cpaper').style.display='none';
      document.getElementById('crock').style.display='none'
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
  document.getElementById('ppaper').style.display='block';
  document.getElementById('prock').style.display='none';
  document.getElementById('pscissors').style.display='none';
})

rockBtn.addEventListener('click', () => {
  game ('rock');
  document.getElementById('prock').style.display='block';
  document.getElementById('ppaper').style.display='none';
  document.getElementById('pscissors').style.display='none';
})

scissorsBtn.addEventListener('click', () => {
  game ('scissors');
  document.getElementById('pscissors').style.display='block';
  document.getElementById('ppaper').style.display='none';
  document.getElementById('prock').style.display='none';
})

function reset () {
  computerScore = 0
  playerScore = 0
  document.getElementById('playerscore').textContent= playerScore;
  document.getElementById('computerscore').textContent= computerScore;
  document.getElementById('playerwins').style.display='none';
  document.getElementById('computerwins').style.display='none';
  moves.forEach(function (i) {
    i.style.display = 'none';
  })
}

let moves = document.querySelectorAll('.move i')
resetBtn.addEventListener('click', reset);