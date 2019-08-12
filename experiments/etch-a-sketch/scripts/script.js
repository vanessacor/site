'use strict';

const gridSizeInput = document.getElementById('grid-size');
const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset');
const colorBtn = document.getElementById('colour');
let useColors = false;

resetBtn.addEventListener('click', reset);
gridSizeInput.addEventListener('input', creatGrid);
colorBtn.addEventListener('click', changeColor);

function creatGrid () {
  const gridSize = gridSizeInput.value;
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
  square.addEventListener('mouseover', () => {
    if (useColors === false) {
      square.style.backgroundColor = 'black';
    } else {
      square.style.backgroundColor = generateColor();
    }
  });
  return square;
}

function changeColor () {
  if (useColors !== true) {
    colorBtn.innerHTML = 'Colour On';
    colorBtn.classList.add('is-on');
    useColors = true;
  } else {
    colorBtn.innerHTML = 'Colour Off';
    colorBtn.classList.remove('is-on');
    useColors = false;
  }
}

function generateColor () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = 'rgb(' + r + ',' + g + ',' + b + ')';
  return color;
}

function cleanGrid () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function reset () {
  gridSizeInput.value = '';
  cleanGrid();
}
