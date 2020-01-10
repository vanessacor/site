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
      const opacity = Number(square.style.opacity);
      square.style.backgroundColor = 'black';
      square.style.opacity = opacity + 0.1;
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
  const colors = ['#ff0000', '#f45905', '#ffc300', '#f5f5f5', '#3fc5f0'];
  const color = colors[Math.floor(Math.random() * colors.length)];
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
