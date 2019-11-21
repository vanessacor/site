'use strict';

class MissteeUI {
  constructor () {
    this.splash = document.querySelector('.splash');
    this.gameScreen = document.querySelector('.game');
    this.playButton = document.getElementById('play-button');
    this.gameOver = document.querySelector('.game-over');
    this.finalScoreDisplay = document.getElementById('final-score');
    this.gameWrapper = document.getElementById('canvas-wrapper');
    this.soundOn = document.getElementById('sound-on');
    this.sound = 'off';

    this._bindEventListeners();
  }

  _bindEventListeners () {
    this.soundOn.addEventListener('click', () => this.turnMusicOnAndOff());
    this.playButton.addEventListener('click', () => this.startGame());
  }

  turnMusicOnAndOff () {
    this.sound = 'on';
    this.soundOn.innerHTML = 'Sound <br>On';
  }

  startGame () {
    this.splash.style.display = 'none';
    this.gameScreen.style.display = 'grid';

    const width = this.gameWrapper.clientWidth;
    const height = this.gameWrapper.clientHeight;
    this.game = new Game(width, height, 'on', this.sound);

    this.game.start();
  }

  showGameOver (score) {
    this.gameScreen.style.display = 'none';
    this.gameOver.style.display = 'block';
    this.finalScoreDisplay.innerText = 'Your score: ' + score;
  }
}
