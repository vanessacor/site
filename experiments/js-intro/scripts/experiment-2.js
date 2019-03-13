'use strict';

// hide and show

// checK: add event listener
// write code here:

let imageA = document.getElementById('image-a');
let imageB = document.getElementById('image-b');
let imageC = document.getElementById('image-c');

function showImageA () {    
  imageA.style.display = 'block';
  imageB.style.display = 'none';
  imageC.style.display = 'none';
}

let buttonA = document.getElementById('button-a');
buttonA.addEventListener('click', showImageA)

function showImageB () {
  imageB.style.display = 'block';
  imageA.style.display = 'none';
  imageC.style.display = 'none';
}

let buttonB = document.getElementById('button-b');
buttonB.addEventListener('click', showImageB)

function showImageC () {
  imageB.style.display = 'none';
  imageA.style.display = 'none';
  imageC.style.display = 'block';
}

let buttonC = document.getElementById('button-c');
buttonC.addEventListener('click', showImageC)
   
