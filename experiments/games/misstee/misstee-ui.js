'use strict';

class MissteeUI {
  constructor () {
    this.scoredisplay = document.getElementById('score');
    this.livesdisplay = document.getElementById('lives');
  }

  updateScore (score) {
    this.scoredisplay.innerText = score;
  }

  updatelives (lives) {
    if (lives >= 1 && lives < 3) {
      this.livesdisplay.removeChild(this.livesdisplay.firstChild);
    }
  }
}
