'use strict';

// hide and show abstract

// checK: add event listener
// write code here:

// let imageA = document.getElementById('image-a');

// function showImageA () {    
//   imageA.style.display = 'block';
// }

// let buttonA = document.getElementById('button-a');
// buttonA.addEventListener('click', showImageA)


 
// when click
// find which button clicked
// ??? image that corresponds to the button clicked
// hide all the images
// show that image

function showOneImage (imageNumber) {
  let images = document.querySelectorAll('#hide-show-abstract img');
  images.forEach(function (image) {
    image.style.display = 'none';
  })
  images[imageNumber].style.display = 'block'
}

let buttons = document.querySelectorAll('#hide-show-abstract .button');
function handleButtonClick (event) {
  let clickedButton = event.currentTarget;
  buttons.forEach(function (button) {
    button.classList.remove('active');
  })
  clickedButton.classList.add('active');
  // add the class 'active' to the clicked button
  // and remove it from the others
  // for both see MDN classList
  let index = clickedButton.getAttribute('image-number');
  showOneImage(index)
}


// find all the buttons in section 'hide-show-abstract'
// for all the buttons add an event.listener 

buttons.forEach(function (button) {
  button.addEventListener('click', handleButtonClick);
})