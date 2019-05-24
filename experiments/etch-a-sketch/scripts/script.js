'use strict'

// create a function that will create the number of divs (sq) requested;
// create a function that will colour black the squares or random colour !== black
  //coding train
  //el hipnogato curioso & jack sparrot


const input = document.getElementById('grid-size');
input.addEventListener('input', creatGrid);
const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

function creatGrid(){
  const gridSize = document.getElementById('grid-size').value;
  cleanGrid();
  for (let i = 0; i < gridSize * gridSize; i++) {
    container.appendChild(createSquare());
  }
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}  

function createSquare () {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.onmouseover = function () {
  square.style.backgroundColor = 'black';
  };
  return square;
}

function cleanGrid () {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function reset () {
  input.value = '';
  cleanGrid();
}


