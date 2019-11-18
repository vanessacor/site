'use strict';

class MissteeUI {
  constructor () {
    this.splash = document.querySelector('.splash');
    this.gameScreen = document.querySelector('.game');
    this.scoredisplay = document.getElementById('score');
    this.livesdisplay = document.getElementById('lives');
    this.playButton = document.getElementById('play-button');
    this.gameOver = document.querySelector('.game-over');
    this.finalScoreDisplay = document.getElementById('final-score');
    this._bindEventListeners();
  }

  _bindEventListeners () {
    this.playButton.addEventListener('click', () => this.startGame());
  }

  startGame () {
    this.splash.style.display = 'none';
    this.gameScreen.style.display = 'block';
  }

  showGameOver (score) {
    this.gameScreen.style.display = 'none';
    this.gameOver.style.display = 'block';
    this.finalScoreDisplay.innerText = 'Your score: ' + score;
  }

  updateScore (score) {
    this.scoredisplay.innerText = score;
  }

  removeHeart () {
    if (this.livesdisplay.children.length) {
      this.livesdisplay.children[0].remove();
    }
  }
}
