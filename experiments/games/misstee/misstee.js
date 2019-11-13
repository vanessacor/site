'use strict';

function main () {
  const width = 580;
  const height = 420;
  const game = new Game(width, height);
  game.start();
  game.loop();
};

window.addEventListener('load', main);
