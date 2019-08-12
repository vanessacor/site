'use strict';

// hide and show

// checK: add event listener
// write code here:

const imageA = document.getElementById('image-a');
const imageB = document.getElementById('image-b');
const imageC = document.getElementById('image-c');

function showImageA () {
  imageA.style.display = 'block';
  imageB.style.display = 'none';
  imageC.style.display = 'none';
}

const buttonA = document.getElementById('button-a');
buttonA.addEventListener('click', showImageA);

function showImageB () {
  imageB.style.display = 'block';
  imageA.style.display = 'none';
  imageC.style.display = 'none';
}

const buttonB = document.getElementById('button-b');
buttonB.addEventListener('click', showImageB);

function showImageC () {
  imageB.style.display = 'none';
  imageA.style.display = 'none';
  imageC.style.display = 'block';
}

const buttonC = document.getElementById('button-c');
buttonC.addEventListener('click', showImageC);
