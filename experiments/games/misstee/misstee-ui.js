'use strict';

class MissteeUI {
  constructor () {
    this.scoredisplay = document.getElementById('score');
    this.livesdisplay = document.getElementById('lives');
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
