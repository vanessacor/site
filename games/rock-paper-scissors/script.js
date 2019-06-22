  'use strict'
  
function main () {
  const $choices = document.getElementById('choices');
  const $choiceButtons = document.querySelectorAll('#choices button');

  const $allMoves = document.querySelectorAll('.move i')
  const $playerScore = document.getElementById('player-score');
  const $computerScore = document.getElementById('computer-score');

  const $resetBtn = document.getElementById('reset');

  const $playerWins = document.getElementById('player-wins');
  const $computerWins = document.getElementById('computer-wins');

  const timeout = 2000;
  let playerScore = 0;
  let computerScore = 0;

  $resetBtn.addEventListener('click', reset);

  function disableButtons () {
    $choiceButtons.forEach((button)=> {
      button.setAttribute('disabled', 'disabled');
    });
  }

  function enableButtons () {    
    $choiceButtons.forEach((button)=> {
      button.removeAttribute('disabled');
    });
  }

  function playerClickedOnChoice(button) {
    disableButtons();
    setTimeout(() => {
      nextRound(button.id);
      showHidePlayerMove('player', button.id);
      enableButtons();
    }, timeout);
    $allMoves.forEach(function (i) {
      i.style.display = 'none';
    });
  }

  $choiceButtons.forEach((button)=> {
    button.addEventListener ('click', () => {
      playerClickedOnChoice(button);
    })
  });

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

  function displayScore () {
    $playerScore.textContent = playerScore;
    $computerScore.textContent = computerScore;
  }

  function isGameOver () {
    return playerScore === 5 || computerScore === 5;
  }

  function displayGameOver () {
    $choices.style.display = 'none';
    $resetBtn.style.display = 'initial';
    
    if (playerScore >= 5) {
      return $playerWins.style.display = 'block';
    } else if (computerScore >= 5) {  
      return $computerWins.style.display = 'block';
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
    const chosenMoveId = `${player}-${move}`;
    Array.from(moves.children).forEach(icon =>{
      const iconDisplayStyle = icon.id === chosenMoveId ? 'block' : 'none'
      icon.style.display = iconDisplayStyle;
    });
  }

  //end game
  function reset () {
    computerScore = 0
    playerScore = 0
    $playerScore.textContent= playerScore;
    $computerScore.textContent= computerScore;
    $playerWins.style.display = 'none';
    $computerWins.style.display = 'none';
    $allMoves.forEach(function (i) {
      i.style.display = 'none';
    });
    $choices.style.display = 'flex';
    $resetBtn.style.display = 'none';
  }

}

window.addEventListener('load', main);