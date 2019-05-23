'use strict'

// create a function that will create the number of divs (sq) requested;
// create a function that will colour black the squares or random colour !== black
  //


const input = document.getElementById('grid-size')
input.addEventListener('input', creatGrid);

function creatGrid(){
  const container = document.getElementById('grid-container');
  const gridSize = document.getElementById('grid-size').value;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'squares');
    container.appendChild(div);
  }
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}  

function sketch() {
  const squares = document.querySelectorAll('squares');
  squares.forEach ((e) => {
    e.addEventListener('mouseover', ()=>{
      squares.style.background = 'black';
    })
  })
}
