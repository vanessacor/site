'use strict'

const input = document.getElementById('grid-size');
const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset');
const colourBtn = document.getElementById('colour');

resetBtn.addEventListener('click', reset);
input.addEventListener('input', creatGrid);
colourBtn.addEventListener('click', changeColor);

function creatGrid(){
  const gridSize = document.getElementById('grid-size').value;
  cleanGrid();
  for (let i = 0; i < gridSize * gridSize; i++) {
    container.appendChild(createSquare());
  }
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}  

function createSquare() {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  if (colourBtn.value == 'colour off') {
    square.addEventListener ('mouseover', () => { 
      square.style.backgroundColor = 'black'
    });
    return square;
  }
  else {
    square.addEventListener ('mouseover', () => { 
      square.style.backgroundColor = generateColor();
    });
    return square;
  }
} 

function changeColor() {
  reset();
  if (colourBtn.value == 'colour off') {
    colourBtn.value = 'colour on';
  }
  else {
    colourBtn.value = 'colour off';
  }
}

function generateColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
  }

function cleanGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function reset() {
  input.value = '';
  cleanGrid();
}

