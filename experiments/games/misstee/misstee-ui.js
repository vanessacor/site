'use strict';

class MissteeUI {
  constructor () {
    this.splash = document.querySelector('.splash');
    this.gameScreen = document.querySelector('.game');
    this.playButton = document.getElementById('play-button');
    this.gameOver = document.querySelector('.game-over');
    this.finalScoreDisplay = document.getElementById('final-score');
    this.width = 580; // need to change to the div width
    this.height = 420; // need to change to the div height
    this.game = new Game(this.width, this.height, 'on');
    this._bindEventListeners();
  }

  _bindEventListeners () {
    this.playButton.addEventListener('click', () => this.startGame());
  }

  startGame () {
    this.splash.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.game.start();
  }

  showGameOver (score) {
    this.gameScreen.style.display = 'none';
    this.gameOver.style.display = 'block';
    this.finalScoreDisplay.innerText = 'Your score: ' + score;
  }
}
