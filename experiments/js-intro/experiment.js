'use strict';

function runExperiment1() {
    let age1 = 2;
    let age2 = 4;
    let age3 = 10;
    let average = (age1 + age2 + age3) / 3;

    let resultElement = document.getElementById ('result-1');
    resultElement.innerHTML = average;
}

// when the user clicks on a button
// invoke the function runExperiment1
// checK: add event listener
// write code here:
const myButton = document.getElementById ('button-1');
myButton .addEventListener ('click', runExperiment1);

//hide and show
const imageA = document.getElementById ('image-a');
const imageB = document.getElementById ('image-b');
const buttonA = document.getElementById ('button-a');
const buttonB = document.getElementById ('button-b');

buttonA.addEventListener ('click', () => {
    imageA.hidden = true;
    imageB.hidden = false;
});

buttonB.addEventListener ('click', () => {
    imageA.hidden = false;
    imageB.hidden = true;
})