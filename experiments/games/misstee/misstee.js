'use strict';

function main () {
  const width = 580;
  const height = 420;
  const game = new Game(width, height, 'on');
  game.start();
};

window.addEventListener('load', main);
